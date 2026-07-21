import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import {Routes,Route,Link,useNavigate,useParams,Navigate} from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,User} from 'firebase/auth';
import {doc,getDoc,setDoc,serverTimestamp} from 'firebase/firestore';
import {auth,db} from './firebase';
import {modules} from './modules';
import {jsPDF} from 'jspdf';
import {BookOpen,CheckCircle2,Lock,LogOut,Home,UserRound,Award,ArrowLeft,ArrowRight,Eye,EyeOff,Mail,BriefcaseBusiness,Building2,UserCircle2,ShieldCheck,ExternalLink} from 'lucide-react';
import HomePage from './pages/HomePage';
import './styles.css';

// ============================================================
// TIPOS E CONTEXTO GLOBAL
// ============================================================

type Profile={name:string;profession:string;unit:string};
type Progress={completed:string[];scores:Record<string,number>;finalPassed:boolean};
type Ctx={user:User|null;profile:Profile;progress:Progress;loading:boolean;saveProfile:(p:Profile)=>Promise<void>;saveProgress:(p:Progress)=>Promise<void>};
const C=createContext<Ctx>(null!);
const emptyP={name:'',profession:'',unit:''};
const emptyG={completed:[],scores:{},finalPassed:false};
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// ============================================================
// UTILITÁRIOS DO YOUTUBE
// ============================================================

function youtubeId(value:string){
 const url=value.trim();
 if(/^[A-Za-z0-9_-]{11}$/.test(url)) return url;
 try{
  const parsed=new URL(url);
  if(parsed.pathname.includes('/embed/')) return parsed.pathname.split('/embed/')[1]?.split('/')[0]||'';
  if(parsed.pathname.includes('/shorts/')) return parsed.pathname.split('/shorts/')[1]?.split('/')[0]||'';
  if(parsed.hostname.includes('youtu.be')) return parsed.pathname.replace(/^\//,'').split('/')[0]||'';
  return parsed.searchParams.get('v')||'';
 }catch{return ''}
}
function youtubeEmbed(value:string){
 const id=youtubeId(value);
 return id?`https://www.youtube-nocookie.com/embed/${id}?controls=1&playsinline=1&rel=0&modestbranding=1`:value;
}
function youtubeWatch(value:string){
 const id=youtubeId(value);
 return id?`https://www.youtube.com/watch?v=${id}`:value;
}



// ============================================================
// FIREBASE E ESTADO GLOBAL
// ============================================================

function Provider({children}:{children:React.ReactNode}){
 const[user,setUser]=useState<User|null>(null);const[profile,setProfile]=useState<Profile>(emptyP);const[progress,setProgress]=useState<Progress>(emptyG);const[loading,setLoading]=useState(true);
 useEffect(()=>onAuthStateChanged(auth,async u=>{setUser(u);if(u){const s=await getDoc(doc(db,'users',u.uid));if(s.exists()){const d=s.data();setProfile(d.profile||emptyP);setProgress(d.progress||emptyG)}}else{setProfile(emptyP);setProgress(emptyG)}setLoading(false)}),[]);
 const saveProfile=async(p:Profile)=>{if(!user)return;setProfile(p);await setDoc(doc(db,'users',user.uid),{email:user.email,profile:p,progress},{merge:true})};
 const saveProgress=async(p:Progress)=>{if(!user)return;setProgress(p);await setDoc(doc(db,'users',user.uid),{email:user.email,profile,progress:p},{merge:true})};
 return <C.Provider value={{user,profile,progress,loading,saveProfile,saveProgress}}>{children}</C.Provider>
}
const useApp=()=>useContext(C);
function Guard({children}:{children:React.ReactNode}){const{user,loading}=useApp();return loading?<div className="center"><div className="loader"/><p>Carregando sua experiência...</p></div>:user?<>{children}</>:<Navigate to="/login"/>}

// ============================================================
// COMPONENTES DE FORMULÁRIO
// ============================================================

function Field({icon,label,children,error}:{icon:React.ReactNode;label:string;children:React.ReactNode;error?:string}){
 return <label className="field"><span className="field-label">{label}</span><span className={`input-shell ${error?'invalid':''}`}>{icon}{children}</span>{error&&<small className="field-error">{error}</small>}</label>
}

// ============================================================
// AUTENTICAÇÃO
// ============================================================

function Auth({register=false}){
 const nav=useNavigate();
 const[email,setEmail]=useState('');const[password,setPassword]=useState('');const[confirmPassword,setConfirmPassword]=useState('');
 const[name,setName]=useState('');const[profession,setProfession]=useState('');const[unit,setUnit]=useState('');
 const[error,setError]=useState('');const[showPassword,setShowPassword]=useState(false);const[showConfirm,setShowConfirm]=useState(false);const[submitting,setSubmitting]=useState(false);const[touchedEmail,setTouchedEmail]=useState(false);
 const emailError=touchedEmail&&!emailRegex.test(email)?'Digite um e-mail válido contendo @ e domínio.':'';
 const confirmError=register&&confirmPassword.length>0&&confirmPassword!==password?'As senhas não coincidem.':'';
 const strength=useMemo(()=>{let value=0;if(password.length>=8)value++;if(/[A-Z]/.test(password))value++;if(/[0-9]/.test(password))value++;if(/[^A-Za-z0-9]/.test(password))value++;return value},[password]);
 async function submit(e:React.FormEvent){
  e.preventDefault();setError('');setTouchedEmail(true);
  if(!emailRegex.test(email)){setError('Informe um endereço de e-mail válido.');return}
  if(password.length<8){setError('A senha deve ter pelo menos 8 caracteres.');return}
  if(register&&password!==confirmPassword){setError('A confirmação de senha não corresponde.');return}
  setSubmitting(true);
  try{
   if(register){const credential=await createUserWithEmailAndPassword(auth,email.trim(),password);const newProfile={name:name.trim(),profession:profession.trim(),unit:unit.trim()};await setDoc(doc(db,'users',credential.user.uid),{email:credential.user.email,profile:newProfile,progress:emptyG},{merge:true})}
   else await signInWithEmailAndPassword(auth,email.trim(),password);
   nav('/dashboard');
  }catch(e:any){const code=e?.code||'';const friendly=code==='auth/email-already-in-use'?'Este e-mail já está cadastrado.':code==='auth/invalid-email'?'Digite um e-mail válido.':code==='auth/weak-password'?'Escolha uma senha mais forte, com pelo menos 8 caracteres.':code==='auth/invalid-credential'?'E-mail ou senha inválidos.':code==='auth/operation-not-allowed'?'Ative o login por e-mail/senha no Firebase Authentication.':code==='permission-denied'?'O Firestore recusou a gravação. Publique as regras do arquivo firestore.rules.':e.message?.replace('Firebase:','')||'Não foi possível entrar.';setError(friendly)}finally{setSubmitting(false)}
 }
 return <main className="auth">
  <section className="brand">
   <div className="pride-strip" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
   <div className="brand-content"><span className="brand-badge"><ShieldCheck/> Educação, respeito e diversidade</span><img
          className="brand-main-image"
          src="/LGB-splash2.jpg"
          alt="Saúde Plural"
          width={698}
          height={698}
        /><h1>Saúde Plural</h1><p>Plataforma web de capacitação para um atendimento mais humano, inclusivo e respeitoso.</p><div className="brand-features"><span><CheckCircle2/> Conteúdo especializado</span><span><CheckCircle2/> Certificação digital</span><span><CheckCircle2/> Progresso salvo</span></div></div>
  </section>
  <section className="auth-panel"><form onSubmit={submit} className="authcard" noValidate><div className="auth-heading"><span>{register?'Comece sua formação':'Bem-vindo de volta'}</span><h2>{register?'Criar conta':'Entrar na plataforma'}</h2><p>{register?'Preencha seus dados profissionais para iniciar.':'Acesse seus módulos e continue de onde parou.'}</p></div>
   {register&&<div className="form-grid"><Field label="Nome completo" icon={<UserCircle2/>}><input placeholder="Seu nome completo" value={name} onChange={e=>setName(e.target.value)} required/></Field><Field label="Profissão" icon={<BriefcaseBusiness/>}><input placeholder="Sua profissão" value={profession} onChange={e=>setProfession(e.target.value)} required/></Field><div className="full"><Field label="Unidade de saúde" icon={<Building2/>}><input placeholder="Nome da unidade" value={unit} onChange={e=>setUnit(e.target.value)} required/></Field></div></div>}
   <Field label="E-mail" icon={<Mail/>} error={emailError}><input type="email" placeholder="nome@exemplo.com" value={email} onBlur={()=>setTouchedEmail(true)} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></Field>
   <Field label="Senha" icon={<Lock/>}><input type={showPassword?'text':'password'} placeholder="Mínimo de 8 caracteres" value={password} onChange={e=>setPassword(e.target.value)} minLength={8} required autoComplete={register?'new-password':'current-password'}/><button type="button" className="eye" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword?'Ocultar senha':'Mostrar senha'}>{showPassword?<EyeOff/>:<Eye/>}</button></Field>
   {register&&<><div className="password-meter" aria-label="Força da senha"><span><i className={strength>=1?'on':''}/><i className={strength>=2?'on':''}/><i className={strength>=3?'on':''}/><i className={strength>=4?'on':''}/></span><small>{password.length===0?'Use 8+ caracteres, número e símbolo':strength<=1?'Senha fraca':strength===2?'Senha razoável':strength===3?'Senha forte':'Senha excelente'}</small></div><Field label="Confirmar senha" icon={<Lock/>} error={confirmError}><input type={showConfirm?'text':'password'} placeholder="Digite a senha novamente" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required autoComplete="new-password"/><button type="button" className="eye" onClick={()=>setShowConfirm(v=>!v)} aria-label={showConfirm?'Ocultar confirmação':'Mostrar confirmação'}>{showConfirm?<EyeOff/>:<Eye/>}</button></Field></>}
   {error&&<div className="error" role="alert">{error}</div>}
   <button className="primary-action" disabled={submitting}>{submitting?'Aguarde...':register?'Criar minha conta':'Entrar'}</button>
   <p className="auth-switch">{register?'Já possui conta?':'Ainda não possui conta?'} <Link to={register?'/login':'/cadastro'}>{register?'Entrar':'Cadastre-se'}</Link></p>
  </form></section>
 </main>
}

// ============================================================
// LAYOUT PRINCIPAL E DASHBOARD
// ============================================================

function Layout({children}:{children:React.ReactNode}){const{profile}=useApp();return <><div className="top-rainbow"/><header><Link to="/dashboard" className="logo"><img src="/icon.jpg"/> <span>Saúde <b>Plural</b></span></Link><nav><Link to="/dashboard"><Home/>Início</Link><Link to="/perfil"><UserRound/>Perfil</Link><button className="linkbtn" onClick={()=>signOut(auth)}><LogOut/>Sair</button></nav></header><div className="welcome"><span>Olá, <b>{profile.name||'participante'}</b></span><small>Seu espaço de aprendizagem inclusiva</small></div>{children}<footer><strong>Saúde Plural</strong><span>Formação para o cuidado inclusivo</span><div className="footer-rainbow"/></footer></>}
function Dashboard(){const{progress}=useApp();const pct=Math.round(progress.completed.length/modules.length*100);return <Layout><main className="container"><section className="hero"><div><span className="pill">CURSO ONLINE CERTIFICADO</span><h1>Capacitação Saúde Plural</h1><p>Avance pelos módulos, realize as avaliações e fortaleça práticas de cuidado acolhedoras e respeitosas.</p><div className="bar"><i style={{width:pct+'%'}}/></div><small>{pct}% concluído • {progress.completed.length} de {modules.length} módulos</small></div><img
          className="dashboard-hero-image"
          src="/LGB3.jpg"
          alt="Diversidade e inclusão"
          width={698}
          height={698}
        /></section><h2 className="sectiontitle"><BookOpen/> Módulos do curso</h2><div className="grid">{modules.map((m,i)=>{const open=i===0||progress.completed.includes(modules[i-1].id);const done=progress.completed.includes(m.id);return <article className="module" key={m.id} style={{'--module-color':m.color} as React.CSSProperties}><div className="moduletop"><span>Módulo {i+1}</span>{done?<CheckCircle2 className="done"/>:open?<BookOpen/>:<Lock/>}</div><h3>{m.title}</h3><p>{m.subtitle}</p><Link className={open?'btn':'btn disabled'} to={open?`/modulo/${m.id}`:'#'}>{done?'Revisar módulo':open?'Iniciar módulo':'Bloqueado'}</Link></article>})}</div>{progress.completed.length===modules.length&&<div className="finalcard"><Award/><div><h2>Prova final liberada!</h2><p>Conclua a avaliação final para emitir seu certificado.</p></div><Link className="btn" to="/prova-final">Fazer prova final</Link></div>}</main></Layout>}
// ============================================================
// MÓDULOS E VÍDEOS
// ============================================================

function Module(){const{id}=useParams();const m=modules.find(x=>x.id===id);if(!m)return <Navigate to="/"/>;return <Layout><main className="container narrow"><Link to="/dashboard" className="back"><ArrowLeft/> Voltar</Link><div className="contenthead" style={{background:m.color}}><span>{m.title}</span><h1>{m.subtitle}</h1><p>{m.description}</p></div><article className="lesson">{m.content.map((p,i)=><p key={i} className={p.endsWith(':')||/^\d\.\d/.test(p)||p.length<85?'heading':''}>{p}</p>)}{m.videoUrls?.length>0&&<section className="video-section"><div className="video-heading"><span>Conteúdo em vídeo</span><h2>Assista ao vídeo desta seção</h2><p>O vídeo está incorporado à plataforma para você assistir sem sair do módulo.</p></div><div className="video-grid">{m.videoUrls.map((u,i)=><div className="video-card" key={i}><div className="video-frame"><iframe src={youtubeEmbed(u)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" title={`Vídeo ${i+1} - ${m.title}`}/></div><a className="youtube-fallback" href={youtubeWatch(u)} target="_blank" rel="noopener noreferrer"><ExternalLink/> Não conseguiu reproduzir? Assistir no YouTube</a></div>)}</div></section>}{m.resourceLinks?.map((r,i)=><a key={i} href={r.url} target="_blank" rel="noreferrer">{r.title}</a>)}</article><Link className="btn big module-quiz-button" to={`/quiz/${m.id}`}>Realizar avaliação do módulo</Link></main></Layout>}
// ============================================================
// AVALIAÇÕES
// ============================================================

function Quiz({final=false}){const{id}=useParams();const nav=useNavigate();const{progress,saveProgress}=useApp();const qs=final?modules.map(m=>m.questions[0]).filter(Boolean):modules.find(m=>m.id===id)?.questions||[];const[ans,setAns]=useState<Record<number,number>>({});const[result,setResult]=useState<number|null>(null);async function finish(){if(Object.keys(ans).length<qs.length){alert('Responda todas as questões.');return}const score=Math.round(qs.filter((q,i)=>ans[i]===q.answerIndex).length/qs.length*100);setResult(score);if(score>=60){if(final)await saveProgress({...progress,finalPassed:true});else if(id&&!progress.completed.includes(id))await saveProgress({...progress,completed:[...progress.completed,id],scores:{...progress.scores,[id]:score}})}}return <Layout><main className="container narrow"><Link to={final?'/':'/modulo/'+id} className="back"><ArrowLeft/> Voltar</Link><div className="quizhead"><h1>{final?'Avaliação final':'Avaliação do módulo'}</h1><p>É necessário atingir pelo menos 60% de acertos.</p></div>{result===null?<>{qs.map((q,i)=><section className="question" key={i}><h3>{i+1}. {q.question}</h3>{q.options.map((o,j)=><label key={j} className={ans[i]===j?'selected':''}><input type="radio" name={'q'+i} checked={ans[i]===j} onChange={()=>setAns({...ans,[i]:j})}/>{o}</label>)}</section>)}<button className="btn big" onClick={finish}>Finalizar avaliação</button></>:<div className={result>=60?'result success':'result fail'}><h2>{result>=60?'Parabéns!':'Tente novamente'}</h2><strong>{result}%</strong><p>{result>=60?'Você atingiu a nota mínima de 60%.':'Você ainda não atingiu a nota mínima de 60%.'}</p>{result>=60?<button className="btn" onClick={()=>nav(final?'/certificado':'/dashboard')}>{final?'Emitir certificado':'Continuar curso'}</button>:<button className="btn" onClick={()=>{setResult(null);setAns({})}}>Refazer avaliação</button>}</div>}</main></Layout>}
// ============================================================
// PERFIL
// ============================================================

function Profile(){const{profile,saveProfile}=useApp();const[p,setP]=useState(profile);return <Layout><main className="container narrow"><h1>Meu perfil</h1><form className="profile" onSubmit={async e=>{e.preventDefault();await saveProfile(p);alert('Dados salvos!')}}><label>Nome completo<input value={p.name} onChange={e=>setP({...p,name:e.target.value})} required/></label><label>Profissão<input value={p.profession} onChange={e=>setP({...p,profession:e.target.value})} required/></label><label>Unidade de saúde<input value={p.unit} onChange={e=>setP({...p,unit:e.target.value})} required/></label><button className="btn">Salvar alterações</button></form></main></Layout>}
// ============================================================
// CERTIFICADO
// ============================================================

function Certificate(){
 const{profile,progress,saveProfile,user}=useApp();
 const[p,setP]=useState(profile);const[generating,setGenerating]=useState(false);const[message,setMessage]=useState('');
 if(!progress.finalPassed)return <Navigate to="/"/>;
 async function issue(){
  if(!p.name.trim()||!p.profession.trim()||!p.unit.trim()){setMessage('Preencha todos os dados antes de gerar o certificado.');return}
  setGenerating(true);setMessage('');
  try{
   await saveProfile(p);
   const code=`SP-${(user?.uid||'CURSO').slice(0,6).toUpperCase()}-${new Date().getFullYear()}`;
   if(user) await setDoc(doc(db,'certificados',`${user.uid}-final`),{uid:user.uid,email:user.email,nome:p.name,profissao:p.profession,unidade:p.unit,curso:'Comunidade LGBTQIA+ na Atenção Básica de Saúde: Cuidado e Acolhimento',codigoVerificacao:code,status:'válido',emitidoEm:serverTimestamp()},{merge:true});
   const pdf=new jsPDF('landscape','mm','a4');
   const template=await fetch('/certificate-template.jpg').then(r=>r.blob()).then(blob=>new Promise<string>((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result));reader.onerror=reject;reader.readAsDataURL(blob)}));
   pdf.addImage(template,'JPEG',0,0,297,210);
   pdf.setTextColor(7,21,111);pdf.setFont('helvetica','bold');pdf.setFontSize(23);pdf.text(p.name,148.5,89,{align:'center',maxWidth:183});
   pdf.setFont('helvetica','normal');pdf.setFontSize(10.5);pdf.text(`${p.profession} - ${p.unit}`,148.5,100,{align:'center',maxWidth:186});
   pdf.setFontSize(10);pdf.text(new Date().toLocaleDateString('pt-BR'),127,134,{align:'center'});pdf.text(code,227,134,{align:'center'});
   pdf.save(`Certificado-Saude-Plural-${p.name.replace(/\s+/g,'-')}.pdf`);
   setMessage('Certificado gerado e registrado no Firebase com sucesso.');
  }catch(e:any){setMessage(e?.message||'Não foi possível gerar o certificado. Confira as regras do Firestore.')}
  finally{setGenerating(false)}
 }
 return <main className="certificate-page">
  <div className="certificate-form-card">
   <Award className="certificate-ribbon"/>
   <h1>Certificado final</h1>
   <p>Confira os dados que serão exibidos no certificado de conclusão.</p>
   <label>Nome completo<input value={p.name} onChange={e=>setP({...p,name:e.target.value})} placeholder="Digite seu nome completo"/></label>
   <label>Profissão<input value={p.profession} onChange={e=>setP({...p,profession:e.target.value})} placeholder="Ex.: Docente"/></label>
   <label>Unidade de saúde<input value={p.unit} onChange={e=>setP({...p,unit:e.target.value})} placeholder="Ex.: UBS Centro"/></label>
   {message&&<div className={message.includes('sucesso')?'certificate-message success-message':'certificate-message'}>{message}</div>}
   <button className="certificate-generate" onClick={issue} disabled={generating}>{generating?'Gerando certificado...':<>Gerar certificado final <ArrowRight/></>}</button>
   <Link className="certificate-back" to="/dashboard">Voltar aos módulos</Link>
  </div>
 </main>
}
// ============================================================
// ROTAS
// ============================================================

export default function App(){
 return <Provider><Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/login" element={<Auth/>}/>
  <Route path="/cadastro" element={<Auth register/>}/>
  <Route path="/dashboard" element={<Guard><Dashboard/></Guard>}/>
  <Route path="/modulo/:id" element={<Guard><Module/></Guard>}/>
  <Route path="/quiz/:id" element={<Guard><Quiz/></Guard>}/>
  <Route path="/prova-final" element={<Guard><Quiz final/></Guard>}/>
  <Route path="/perfil" element={<Guard><Profile/></Guard>}/>
  <Route path="/certificado" element={<Guard><Certificate/></Guard>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
 </Routes></Provider>
}
