export type ModuleId = 'intro' | 'uc1' | 'uc2' | 'uc3' | 'uc4' | 'uc5' | 'uc6' | 'uc7' | 'uc8' | 'uc9';

export type Question = { question: string; options: string[]; answerIndex: number; feedback?: string };
export type ResourceLink = { title: string; url: string };
export type CourseModule = { id: ModuleId; title: string; subtitle: string; description: string; color: string; content: string[]; videoUrls: string[]; resourceLinks?: ResourceLink[]; questions: Question[] };

export const modules: CourseModule[] = [
  {
    "id": "intro",
    "title": "INTRODUÇÃO",
    "subtitle": "Conceitos de orientação sexual, identidade de gênero e terminologias",
    "description": "2.1 Conhecendo os Conceitos de Orientação Sexual, Identidade de Gênero e Terminologias",
    "color": "#E53935",
    "content": [
      "INTRODUÇÃO:",
      "2.1 Conhecendo os Conceitos de Orientação Sexual, Identidade de Gênero e Terminologias",
      "A orientação sexual diz respeito aos relacionamentos afetivos-sexuais, que podem ser com pessoas do mesmo sexo, sexo oposto ou ambos. Já a identidade de gênero se refere à percepção que a pessoa tem de si como sendo do gênero feminino, masculino ou de uma combinação dos dois, independente de seu sexo biológico.",
      "2.2 Terminologias e Identidade",
      "Intersexualidade: Descreve pessoas que nascem com anatomia reprodutiva ou padrão de cromossomos que não podem ser classificados como tipicamente femininos ou masculinos.",
      "Bissexual: É a pessoa que se relaciona afetiva e sexualmente com pessoas de ambos os gêneros/sexos, homens e mulheres.",
      "Assexual: O indivíduo assexual é aquele que não sente atração sexual por nenhuma outra pessoa, independentemente do seu gênero.",
      "Heterosexual: Denomina-se heterossexual a pessoa que se sente atraída sexual, emocional ou afetivamente por pessoas do sexo/gênero oposto.",
      "Homossexual: Homossexual é o indivíduo atraído amorosa, física e afetivamente por pessoas do mesmo sexo/gênero. O termo refere-se, portanto, tanto a homossexuais femininas quanto masculinos.",
      "Gay: Pode ser chamada de gay a pessoa do gênero masculino que tem desejos ou relacionamento afetivo-sexual com pessoas do gênero masculino.",
      "Lésbica: Quando uma mulher sente atração afetiva e/ou sexual por pessoas do mesmo sexo/gênero.",
      "Pansexualidade: Se refere a indivíduos que têm atração por outras pessoas, independentemente da sua identidade de gênero ou sexo biológico.",
      "Transgênero: Palavra utilizada para denominar indivíduos que transitam entre os gêneros, ou seja, cuja identidade de gênero transcende as definições convencionais.",
      "Cisgênero: “Cis” é entendido como o oposto de “trans”. Isso significa que uma pessoa cisgênero é aquela que se identifica, em todos os aspectos, com o gênero que lhe foi atribuído ao nascer.",
      "Transexual: Entende-se por transexual a pessoa que tem uma identidade de gênero diferente do sexo biológico designado ao nascer. Algumas pessoas desse grupo recorrem a tratamentos médicos, que podem incluir, por exemplo, terapia hormonal e cirurgia de redesignação sexual.",
      "Trans: A terminologia “trans” se refere, de modo geral, a indivíduos que não se identificam com o gênero atribuído no nascimento. Trata-se, portanto, de uma expressão guarda-chuva que se refere a todas as pessoas com identidades trans: transexuais, transgêneros, travestis.",
      "Travesti: Este termo foi considerado pejorativo durante muito tempo. Entretanto, vem passando por uma ressignificação e, atualmente, adquiriu um teor político. Refere-se ao indivíduo que tem sexo biológico masculino, mas que se entende como uma figura feminina.",
      "Queer: Esta talvez seja uma das expressões menos conhecidas de todas as citadas aqui. Queer consiste em um adjetivo usado para indivíduos que se identificam com todas as orientações sexuais e gêneros, não se encaixando em somente um deles.",
      "+ (sinal de adição): representa todas as outras identidades de gênero, orientações afetivas e sexuais não contempladas pelas letras anteriores, reconhecendo a constante expansão e complexidade da diversidade humana.",
      "LGBT: Após compreender todos esses conceitos, chegamos, finalmente, à sigla LGBT. O termo refere-se a lésbicas, gays, bissexuais, travestis e transexuais. É comum também o acréscimo da letra “I”, de intersexual, ou da letra “Q”, de queer, além do sinal “+” para incluir também o restante das definições relacionadas à comunidade."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/9-PwVp5OdoU"
    ],
    "questions": [
      {
        "question": "Sobre orientação sexual e identidade de gênero, assinale a alternativa correta:",
        "options": [
          "A orientação sexual é determinada pelo sexo biológico da pessoa ao nascer.",
          "A identidade de gênero está necessariamente alinhada com o sexo biológico.",
          "A orientação sexual refere-se à percepção interna de gênero da pessoa.",
          "A identidade de gênero diz respeito ao gênero com o qual a pessoa se identifica, independentemente do sexo biológico.",
          "A orientação sexual é exclusiva de pessoas homossexuais ou bissexuais. "
        ],
        "answerIndex": 3,
        "feedback": "Gabarito: D\nPegadinha: Alternativas A e B confundem os conceitos, e a C inverte as definições."
      },
      {
        "question": "A respeito do termo \"intersexualidade\", assinale a afirmativa correta:",
        "options": [
          "Refere-se a pessoas com atração por mais de um gênero.",
          "Diz respeito à fluidez de gênero ao longo da vida.",
          "Caracteriza-se por atração por pessoas do mesmo sexo.",
          "Trata-se de uma identidade de gênero não-binária.",
          "Refere-se a pessoas com anatomia reprodutiva ou cromossômica que não se enquadra nas categorias binárias de sexo. "
        ],
        "answerIndex": 4,
        "feedback": "Gabarito: E\nPegadinha: Alternativas A e C confundem com bissexualidade e homossexualidade."
      },
      {
        "question": "Qual das alternativas abaixo define corretamente a pansexualidade?",
        "options": [
          "A pessoa sente atração apenas por gêneros não-binários.",
          "A pessoa sente atração por qualquer pessoa, independente de identidade de gênero ou sexo biológico.",
          "A pessoa não sente nenhuma atração sexual.",
          "A pessoa sente atração apenas por homens e mulheres cisgêneros.",
          "A pansexualidade é sinônimo de bissexualidade. "
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: B\nPegadinha: A alternativa E pode enganar por parecer similar, mas a pansexualidade é mais abrangente."
      },
      {
        "question": "Assinale a alternativa correta sobre pessoas assexuais:",
        "options": [
          "São pessoas que apenas sentem atração emocional, não sexual.",
          "Não sentem atração sexual por outras pessoas, independentemente do gênero.",
          "Rejeitam qualquer tipo de relacionamento afetivo.",
          "São pessoas que se atraem exclusivamente por pessoas do mesmo gênero.",
          "São pessoas que transitam entre identidades de gênero."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: B\nPegadinha: A alternativa A é parcialmente verdadeira, mas incompleta; a C exagera e generaliza."
      },
      {
        "question": "Sobre o termo “cisgênero”, é correto afirmar:",
        "options": [
          "Diz respeito a indivíduos que rejeitam o gênero atribuído ao nascer.",
          "Refere-se a pessoas com identidade de gênero fluida.",
          "São pessoas cuja identidade de gênero é congruente com o sexo biológico atribuído ao nascer.",
          "Designa qualquer pessoa que pertença à comunidade LGBTQIAPN+.",
          "É sinônimo de transgênero. "
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C\nPegadinha: A alternativa E parece ser oposta, mas pode confundir."
      },
      {
        "question": "A respeito da terminologia “trans”, é correto afirmar:",
        "options": [
          "É uma categoria que exclui travestis por terem identidade própria.",
          "Refere-se apenas a transexuais que passaram por cirurgia.",
          "Trata-se de um termo guarda-chuva que inclui transexuais, transgêneros e travestis.",
          "Diz respeito exclusivamente a pessoas com identidade de gênero não-binária.",
          "Aplica-se somente a quem realiza tratamento hormonal."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C\nPegadinha: Alternativas B e E restringem incorretamente o uso do termo “trans”."
      },
      {
        "question": "Uma mulher que sente atração afetiva e/ou sexual por outras mulheres é identificada como:",
        "options": [
          "Homossexual masculino.",
          "Bissexual.",
          "Lésbica.",
          "Assexual.",
          "Pansexual."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C\nPegadinha: A alternativa A inverte o gênero e a B pode ser escolhida por distração."
      },
      {
        "question": "Marque  alternativa que melhor define o termo \"queer\":",
        "options": [
          "Pessoas que transitam exclusivamente entre o gênero masculino e feminino.",
          "Indivíduos que não sentem atração sexual por outros.",
          "Pessoas que se identificam com múltiplas ou nenhuma identidade de gênero e/ou orientação sexual.",
          "Indivíduos que se identificam somente com seu sexo biológico.",
          "Um termo exclusivo para homossexuais."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C\nPegadinha: Alternativas A e E simplificam ou restringem indevidamente o conceito."
      },
      {
        "question": "A pessoa que possui uma identidade de gênero diferente do sexo biológico atribuído ao nascer, podendo ou não recorrer a tratamentos médicos, é denominada:",
        "options": [
          "Cisgênero",
          "Heterossexual",
          "Travesti",
          "Transexual",
          "Intersexual"
        ],
        "answerIndex": 3,
        "feedback": "Gabarito: D\nPegadinha: A alternativa C pode confundir, mas o termo \"transexual\" está relacionado com identidade e, muitas vezes, com transição médica."
      },
      {
        "question": "A sigla LGBT, em sua forma expandida como LGBTQIAPN+, inclui, exceto:",
        "options": [
          "Lésbicas",
          "Queer",
          "Intersexuais",
          "Cisgêneros",
          "Assexuais "
        ],
        "answerIndex": 3,
        "feedback": "Gabarito: D\nPegadinha: A alternativa D representa uma identidade que não se encaixa no conceito de diversidade de gênero/sexualidade abordada pela sigla."
      }
    ]
  },
  {
    "id": "uc1",
    "title": "UC1",
    "subtitle": "História, direitos e participação social",
    "description": "Ao surgir a epidemia HIV/Aids, no início dos anos 80, à época fortemente relacionada aos gays, o governo brasileiro apoiou mobilizações da população homossexual masculina na prevenção da doença. Essas mobilizações surtiram grande efeito sanitário diante da amplitude do número de casos que acometem esse grupo.",
    "color": "#FB8C00",
    "content": [
      "No Brasil, no final da década de 1970, surgiram diversos movimentos sociais em defesa de grupos específicos e de liberdades sexuais. A expansão dessas ideias vai se configurando no denominado Movimento LGBT , cujas reflexões e práticas ativistas têm promovido importantes mudanças de valores na sociedade brasileira.",
      "Ao surgir a epidemia HIV/Aids, no início dos anos 80, à época fortemente relacionada aos gays, o governo brasileiro apoiou mobilizações da população homossexual masculina na prevenção da doença. Essas mobilizações surtiram grande efeito sanitário diante da amplitude do número de casos que acometem esse grupo.",
      "O movimento, então constituído majoritariamente por homens, gradualmente foi incorporando grupos com outras identidades sexuais e de gênero, particularmente as lésbicas e travestis. As demandas desses grupos ampliaram a discussão e, consequentemente, redirecionaram as estratégias da prevenção e do cuidado das pessoas em relação ao HIV/Aids.",
      "Cabe ressaltar que as lésbicas, por serem inicialmente excluídas como grupo com prática de risco, não foram contempladas nas ações de prevenção da aids.",
      "O Ministério da Saúde constituiu, ainda em 2004, o Comitê Técnico de Saúde da População GLTB , com vistas à construção de uma política específica para o SUS. A conquista de representação no Conselho Nacional de Saúde (CNS), pelo segmento LGBT, em 2006, confere um novo sentido de atuação do movimento nos processos de participação democrática no SUS, assim como permite e promove o debate de forma estratégica e permanente sobre a orientação sexual e a identidade de gênero e suas repercussões na saúde.",
      "Na 13ª Conferência Nacional de Saúde a orientação sexual e a identidade de gênero são incluídas na análise da determinação social da saúde. As seguintes recomendações que resultaram dessa conferência foram:",
      "O desenvolvimento de ações intersetoriais de educação em direitos humanos e respeito à diversidade, efetivando campanhas e currículos escolares que abordem os direitos sociais.",
      "A sensibilização dos profissionais a respeito dos direitos de LGBT, com inclusão do tema da livre expressão sexual na política de educação permanente no SUS.",
      "A inclusão dos quesitos de identidade de gênero e de orientação sexual nos formulários, prontuários e sistemas de informação em saúde.",
      "A ampliação da participação dos movimentos sociais LGBT nos conselhos de saúde.",
      "O incentivo à produção de pesquisas científicas, inovações tecnológicas e compartilhamento dos avanços terapêuticos.",
      "A garantia dos direitos sexuais e reprodutivos e o respeito ao direito à intimidade e à individualidade.",
      "O estabelecimento de normas e protocolos de atendimento específicos para as lésbicas e travestis.",
      "A manutenção e o fortalecimento de ações de prevenção das IST/aids, com especial foco nas populações LGBT.",
      "O aprimoramento do Processo Transexualizador.",
      "A implementação do protocolo de atenção contra a violência, considerando a identidade de gênero e a orientação sexual."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/sQrnjMO2bMw"
    ],
    "questions": [
      {
        "question": "Quando surgiram os primeiros movimentos sociais em defesa das liberdades sexuais no Brasil?",
        "options": [
          "Início da década de 1990.",
          "Final da década de 1970.",
          "Meados dos anos 2000.",
          "Durante a década de 1960."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: B:  Isso mesmo! O texto situa o surgimento desses movimentos no final dos anos 70."
      },
      {
        "question": "Qual foi a postura do governo brasileiro nos anos 80 em relação à população homossexual masculina e o HIV?",
        "options": [
          "Proibiu manifestações públicas.",
          "Ignorou o grupo por falta de dados.",
          "Apoiou mobilizações para a prevenção da doença.",
          "Centralizou as ações apenas em hospitais privados."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C. Exato! O governo apoiou as mobilizações dos gays para prevenção, gerando grande efeito sanitário."
      },
      {
        "question": "Por que as lésbicas foram inicialmente excluídas das ações de prevenção da Aids?",
        "options": [
          "Por falta de interesse político.",
          "Porque não eram consideradas um grupo com \"prática de risco\".",
          "Devido à ausência de representação no CNS.",
          "Porque já possuíam protocolos próprios."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: B Certo! Por não serem vistas como grupo de risco na época, as lésbicas ficaram fora das primeiras ações."
      },
      {
        "question": "O que a conquista de representação no Conselho Nacional de Saúde (CNS) em 2006 permitiu ao movimento?",
        "options": [
          "O fim das conferências nacionais.",
          "A criação de um sistema de saúde privado.",
          "Um novo sentido de participação democrática no SUS.",
          "A exclusividade no atendimento de urgência."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C. Isso mesmo! A representação no CNS em 2006 inseriu o movimento nas decisões estratégicas do SUS."
      },
      {
        "question": "Qual dessas foi uma recomendação da 13ª Conferência Nacional de Saúde?",
        "options": [
          "Exclusão de quesitos de identidade nos prontuários.",
          "Foco apenas em tratamentos curativos.",
          "Inclusão do tema da livre expressão sexual na educação permanente do SUS.",
          "Restrição de pesquisas científicas sobre o tema.  "
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C. Exato! A conferência recomendou sensibilizar profissionais e incluir a diversidade na formação contínua."
      }
    ]
  },
  {
    "id": "uc2",
    "title": "UC2",
    "subtitle": "Orientação sexual e identidade de gênero na determinação social da saúde",
    "description": "A discussão sobre orientação sexual e identidade de gênero ocupa um espaço importante nos debates sobre direitos humanos, cidadania, educação e saúde. Compreender esses conceitos é fundamental para reconhecer a diversidade humana e contribuir para uma sociedade mais justa e inclusiva, visto que a orientação sexual e identidade de gênero determinam os processo de saúde e doença da comunidade.",
    "color": "#FBC02D",
    "content": [
      "UC2: ORIENTAÇÃO SEXUAL E IDENTIDADE DE GÊNERO NA DETERMINAÇÃO SOCIAL DE SAÚDE INTEGRAL LGBTQIA+",
      "A discussão sobre orientação sexual e identidade de gênero ocupa um espaço importante nos debates sobre direitos humanos, cidadania, educação e saúde. Compreender esses conceitos é fundamental para reconhecer a diversidade humana e contribuir para uma sociedade mais justa e inclusiva, visto que a orientação sexual e identidade de gênero determinam os processo de saúde e doença da comunidade.",
      "Identidade de gênero é a forma como cada pessoa se reconhece e se expressa em relação ao seu gênero. Ela pode ou não corresponder ao sexo atribuído no nascimento. Pessoas cisgênero se identificam com o gênero que lhes foi atribuído ao nascer, enquanto pessoas transgênero possuem uma identidade de gênero diferente dessa atribuição.",
      "Orientação sexual, por sua vez, refere-se à atração afetiva, emocional e/ou sexual de uma pessoa. Ela pode incluir, entre outras possibilidades, a heterossexualidade, a homossexualidade, a bissexualidade, a assexualidade e outros variações.",
      "Historicamente, identidades e orientações que fogem dos padrões heteronormativos e cisnormativos têm sido alvo de preconceito, invisibilidade e exclusão. Essa realidade está presente em diferentes espaços sociais, como escolas, ambientes de trabalho e serviços de saúde. No ambiente escolar, o silêncio sobre a diversidade pode reforçar preconceitos e contribuir para a marginalização de estudantes LGBTQIAPN+, da mesma forma pode acontecer nos serviços de saúde.",
      "Na área da saúde, a população LGBTQIAPN+ também enfrenta barreiras relacionadas à discriminação e à falta de atendimento adequado. O desrespeito ao nome social, a invisibilização da identidade de gênero e a falta de preparo de alguns profissionais podem dificultar o acesso a um cuidado integral e humanizado, afetando a saúde física e mental dessa população.",
      "Você sabia que o direito à saúde é previsto na Constituição Federal?",
      "A Constituição Federal de 1988 estabelece a saúde como um direito de todos e um dever do Estado. Nesse sentido, a Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais, instituída pela Portaria nº 2.836/2011, representa um importante avanço na promoção da equidade no Sistema Único de Saúde (SUS). Vale lembrar que estar garantido na legislação não significa estar sendo praticado, e aí que você entra. O nosso papel enquanto profissional da saúde é promover este direito à equidade e ao acesso à saúde.",
      "Entre as principais ações da Política, estão a ampliação do acesso aos serviços, a capacitação dos profissionais, o respeito à identidade de gênero e à orientação sexual e a oferta de cuidados específicos às necessidades dessa população.",
      "Isso mesmo, a Política prevê que os profissionais da saúde sejam capacitados e treinados para este atendimento à população LGBTQIAPN+. É isso que estamos fazendo agora.",
      "Promover a saúde integral da população LGBTQIAPN+ exige o enfrentamento das desigualdades e dos preconceitos, além da construção de ambientes seguros, inclusivos e acolhedores.",
      "O respeito à diversidade, a escuta ativa e o atendimento humanizado são essenciais para garantir os princípios da cidadania, da equidade e da justiça social.",
      "Portanto, assegurar os direitos da população LGBTQIAPN+ na educação, na saúde e nos demais espaços sociais é fundamental para garantir a todas as pessoas uma vida digna, saudável e livre de discriminação, independentemente de sua identidade de gênero ou orientação sexual.",
      "E você, está contribuindo para assegurar os direitos desta população assim como é previsto na Constituição Federal?"
    ],
    "videoUrls": [
      "https://youtube.com/shorts/NvhaBiRygj8"
    ],
    "questions": [
      {
        "question": "Qual a definição correta de \"Identidade de Gênero\" segundo o texto?",
        "options": [
          "A atração afetiva e emocional por outras pessoas.",
          "A forma como a pessoa se reconhece e se expressa, podendo ou não coincidir com o sexo de nascimento.",
          "Um padrão biológico imutável determinado apenas pelos cromossomos.",
          "A escolha política de um indivíduo dentro de um movimento social."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: Alternativa B: Isso mesmo! A identidade é a percepção subjetiva de quem a pessoa é (Cis ou Trans)."
      },
      {
        "question": "O que caracteriza a \"Orientação Sexual\"?",
        "options": [
          "A percepção interna de ser homem ou mulher.",
          "O uso obrigatório do nome social em documentos.",
          "A atração afetiva, emocional e/ou sexual de uma pessoa.",
          "A transição física realizada por pessoas transgênero."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: Alternativa C. Certo! Refere-se ao desejo e afeto (Hetero, Homo, Bi, Assexual, etc.)."
      },
      {
        "question": "Quais são as principais barreiras enfrentadas pela população LGBTQIAPN+ nos serviços de saúde?",
        "options": [
          "Falta de medicamentos básicos e hospitais lotados.",
          "Desrespeito ao nome social e invisibilização da identidade de gênero.",
          "Excesso de profissionais especializados no atendimento trans.",
          "Prioridade excessiva de atendimento em relação a outros grupos."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: Alternativa B: Isso mesmo! O texto destaca o preconceito e o despreparo profissional como obstáculos ao cuidado integral."
      },
      {
        "question": "A Portaria nº 2.836/2011 é um marco para o SUS pois instituiu:",
        "options": [
          "A privatização dos serviços de saúde para minorias.",
          "A Política Nacional de Saúde Integral de LGBT, promovendo a equidade.",
          "A obrigatoriedade de cirurgias apenas em hospitais militares.",
          "O fim do sigilo médico para casos de orientação sexual."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: Alternativa B. Exato! Essa política visa reduzir desigualdades e garantir o respeito à diversidade no SUS."
      },
      {
        "question": "Segundo o texto, qual o impacto do silêncio sobre a diversidade no ambiente escolar?",
        "options": [
          "Melhora o desempenho acadêmico geral.",
          "Não gera impactos, pois a escola deve ser um ambiente neutro.",
          "Reforça preconceitos e contribui para a marginalização de estudantes.",
          "Garante a segurança de todos os profissionais envolvidos.  "
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: Alternativa C. Certo! A falta de debate gera exclusão e invisibilidade para a população LGBTQIAPN+."
      }
    ]
  },
  {
    "id": "uc3",
    "title": "UC3",
    "subtitle": "Política Nacional de Saúde Integral LGBTQIA+",
    "description": "Você já ouviu falar sobre os fundamentos desta política pública?",
    "color": "#43A047",
    "content": [
      "UC3: Política Nacional de Saúde Integral LGBTQIA+",
      "Você já ouviu falar sobre os fundamentos desta política pública?",
      "A política surge do reconhecimento de que a população LGBT (e suas identidades de gênero e orientações sexuais) sofre discriminação, preconceito, exclusão e violência, fatores que afetam de forma significativa sua saúde e acesso aos serviços.",
      "Está baseada nos princípios constitucionais do Brasil: universalidade, integralidade e equidade. O SUS deve assegurar o direito à saúde de todas as pessoas, respeitando suas especificidades.",
      "A Política também busca a promoção de direitos humanos, cidadania plena, eliminação de preconceitos e discriminação institucional.",
      "E ainda considera “orientação sexual” e “identidade de gênero” como determinantes de saúde, exigindo que esses fatores sejam reconhecidos nos processos de planejamento, atenção, vigilância e qualidade dos serviços.",
      "Importante lembrar que os determinantes de saúde, são fatores que impactam na saúde ou no adoecimento de uma pessoa. Por exemplo, a moradia, acesso ao trabalho, segurança alimentar, entre outros.",
      "A política possui alguns objetivos, que são metas gerais e específicas para efetivar os fundamentos descritos anteriormente. Alguns dos principais:",
      "Promover a saúde integral da população LGBT/LGBTQIAPN+, garantindo acesso aos serviços de saúde com qualidade.",
      "Eliminar a discriminação e o preconceito institucional nos serviços de saúde.",
      "Reduzir desigualdades em saúde que afetam esta população, considerando recortes como raça, cor, etnia, localização territorial etc.",
      "Incluir o uso do nome social para travestis e transexuais nos serviços de saúde.",
      "Fomentar a formação e educação permanente de profissionais de saúde para que o atendimento seja sensível à diversidade de gênero/orientação sexual.",
      "Produzir informações, dados e promover vigilância e pesquisa que considerem orientação sexual e identidade de gênero como variáveis importantes.",
      "Além disso, a política possui diretrizes que orientam como os objetivos devem ser operacionalizados. Entre elas estão descritos:",
      "1. Diretrizes gerais de atuação do SUS para a população LGBT-/LGBTQIAPN+, incluindo atenção integral, respeito, não discriminação.",
      "2. Diretrizes específicas relacionadas à saúde mental, DST/HIV/AIDS, Processos Transexualizador(es), uso de nome social, atenção às particularidades de identidade de gênero/orientação sexual.",
      "3. Educação permanente de profissionais de saúde sobre diversidade sexual e de gênero, enfrentamento à LGBTIfobia nos serviços.",
      "4. Vigilância em saúde que inclua os quesitos de orientação sexual e identidade de gênero nos sistemas de informação, coleta de dados, indicadores.",
      "5. Participação social de pessoas LGBT nas conferências e conselhos de saúde, ouvidorias, controle social.",
      "E você já se perguntou de quem e quais são as responsabilidades e atribuições para atender tudo que a Política prevê?",
      "O Ministério da Saúde",
      "Deve formular diretrizes nacionais, políticas gerais e normativas que orientem toda a atuação do SUS nesse tema.",
      "Monitorar a implementação da política, definir indicadores de avaliação, promover e apoiar pesquisas sobre saúde LGBT.",
      "Promover capacitação de profissionais, articular com outras áreas/setores governamentais e com a sociedade civil.",
      "As Secretarias Estaduais de Saúde",
      "Adotar as diretrizes nacionais em seus planos estaduais de saúde.",
      "Adaptar ações para realidades estaduais, identificar demandas locais da população LGBT, capacitar seus profissionais, promover redes de serviços inclusivas.",
      "As Secretarias Municipais de Saúde",
      "Implantar a política no âmbito municipal: incorporar no Plano Municipal de Saúde, estabelecer metas locais, implementar ações de atenção à saúde da população LGBT.",
      "Identificar necessidades locais, monitorar e avaliar os serviços, promover educação permanente com enfoque LGBT, garantir uso de nome social nos serviços municipais.",
      "Estimular participação social local, articular com instituições comunitárias e outros setores para enfrentar desigualdades.",
      "Além disso, existem outros Ministérios e Secretarias de Saúde que também participam deste processo.",
      "A Secretaria de Gestão Estratégica e Participativa (SGEP/MS), dentro do Ministério da Saúde, tem papel de articulação para elaboração de instrumentos de orientação para os entes federados e apoio à implementação.",
      "E temos ainda outros Ministérios que atuam transversalmente: Direitos Humanos e Educação, para tratar das dimensões sociais, de formação, cidadania e direitos humanos. As Secretarias estaduais e municipais devem adaptar e operacionalizar as políticas, com suas responsabilidades administrativas e operacionais, dentro do SUS."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/3ZTpCPcLVyg"
    ],
    "questions": [
      {
        "question": "A Política Nacional de Saúde Integral LGBTQIA+ fundamenta-se em três princípios constitucionais básicos do SUS. Quais são eles?",
        "options": [
          "Descentralização, regionalização e hierarquização.",
          "Universalidade, integralidade e equidade.",
          "Eficiência, transparência e participação popular.",
          "Privatização, seletividade e centralização.",
          "Sigilo, individualidade e tecnicismo."
        ],
        "answerIndex": 1,
        "feedback": "Gabarito: B) Universalidade, integralidade e equidade. A Política Nacional de Saúde Integral LGBTQIA+ é fundamentada nos três princípios doutrinários do SUS:"
      },
      {
        "question": "Segundo o texto, a \"orientação sexual\" e a \"identidade de gênero\" devem ser reconhecidas nos processos de planejamento e vigilância do SUS como:",
        "options": [
          "Fatores biológicos imutáveis.",
          "Opções de estilo de vida sem impacto clínico.",
          "Determinantes de saúde.",
          "Critérios de exclusão para atendimentos especializados.",
          "Variáveis irrelevantes para a qualidade dos serviços."
        ],
        "answerIndex": 2,
        "feedback": "Gabarito: C) Determinantes de saúde. A política reconhece que a orientação sexual e a identidade de gênero influenciam diretamente as condições de saúde, o acesso aos serviços e a ocorrência de discriminação. Por isso, devem ser consideradas determinantes sociais da saúde no planejamento, monitoramento e avaliação das ações do SUS."
      },
      {
        "question": "Um dos objetivos específicos da política para eliminar o preconceito institucional e garantir o respeito à identidade é:",
        "options": [
          "A criação de unidades de saúde exclusivas para pessoas trans.",
          "A obrigatoriedade de cirurgia de redesignação sexual.",
          "A inclusão do uso do nome social para travestis e transexuais nos serviços de saúde.",
          "A proibição de perguntas sobre a vida afetiva do paciente.",
          "A padronização do atendimento ignorando a diversidade de gênero."
        ],
        "answerIndex": 2,
        "feedback": "Resposta: C) A inclusão do uso do nome social para travestis e transexuais nos serviços de saúde. O uso do nome social é um direito garantido e representa uma medida essencial para combater o preconceito institucional, promover o respeito à identidade de gênero e humanizar o atendimento às pessoas travestis e transexuais nos serviços de saúde."
      },
      {
        "question": "Na busca pela redução de desigualdades em saúde, a política orienta que se considere, além da identidade LGBT, outros recortes sociais como:",
        "options": [
          "Apenas a faixa etária dos usuários.",
          "Raça, cor, etnia e localização territorial, ou seja, onde a pessoa mora.",
          "Somente o nível de escolaridade formal.",
          "A filiação partidária e a religiosidade.",
          "Apenas a renda salarial do indivíduo."
        ],
        "answerIndex": 1,
        "feedback": "Resposta: B) Raça, cor, etnia e localização territorial. A política adota uma perspectiva de equidade, reconhecendo que as desigualdades em saúde também estão relacionadas a fatores como raça, cor, etnia, território, idade, condição socioeconômica e outras vulnerabilidades, que podem se somar à discriminação por orientação sexual e identidade de gênero."
      },
      {
        "question": "No eixo das \"Diretrizes\", qual medida é recomendada para que os profissionais de saúde lidem melhor com a diversidade sexual?",
        "options": [
          "Aplicação de multas por erros de pronome.",
          "Substituição total da equipe médica por especialistas LGBTQIA+.",
          "Educação permanente com foco na diversidade sexual e de gênero.",
          "Redução da carga horária de atendimento para esses grupos.",
          "Foco exclusivo em pesquisas laboratoriais sem contato humano."
        ],
        "answerIndex": 2,
        "feedback": "Resposta: C) Educação permanente com foco na diversidade sexual e de gênero. Entre as diretrizes da política está a educação permanente dos profissionais de saúde, visando qualificá-los para prestar atendimento livre de preconceitos, respeitando a diversidade sexual e de gênero e promovendo assistência humanizada."
      },
      {
        "question": "De que forma a vigilância em saúde deve atuar para melhorar a qualidade dos dados sobre a população LGBTQIA+?",
        "options": [
          "Mantendo o sigilo absoluto sobre a orientação sexual nos prontuários.",
          "Coletando dados apenas em ONGs e coletivos privados.",
          "Incluindo os quesitos de orientação sexual e identidade de gênero nos sistemas de informação dos serviços de saúde.",
          "Excluindo travestis e transexuais das estatísticas nacionais.",
          "Priorizando apenas dados sobre doenças infectocontagiosas."
        ],
        "answerIndex": 2,
        "feedback": "Resposta: C) Incluindo os quesitos de orientação sexual e identidade de gênero nos sistemas de informação. A vigilância em saúde deve aprimorar a produção de informações sobre a população LGBTQIA+ por meio da inclusão dos campos de orientação sexual e identidade de gênero nos sistemas de informação, permitindo identificar desigualdades e planejar políticas públicas mais eficazes."
      },
      {
        "question": "Qual é a responsabilidade primordial do Ministério da Saúde na implementação desta política?",
        "options": [
          "Atender diretamente todos os pacientes LGBTQIA+ do país.",
          "Formular diretrizes nacionais e políticas gerais que orientem a atuação do SUS.",
          "Gerenciar apenas as unidades básicas de saúde dos municípios.",
          "Fiscalizar as escolhas individuais dos profissionais de saúde estaduais.",
          "Isentar-se de pesquisas científicas sobre o tema para evitar polêmicas."
        ],
        "answerIndex": 1,
        "feedback": "Resposta: B) Formular diretrizes nacionais e políticas gerais que orientem a atuação do SUS. Compete ao Ministério da Saúde, no âmbito federal, elaborar as políticas nacionais, definir diretrizes, coordenar a implementação da política, apoiar Estados e Municípios e promover pesquisas e ações de âmbito nacional."
      },
      {
        "question": "Cabe às Secretarias Estaduais de Saúde, no contexto da política nacional:",
        "options": [
          "Ignorar as diretrizes federais para focar em demandas locais.",
          "Adotar as diretrizes nacionais em seus planos estaduais de saúde e promover redes inclusivas.",
          "Criar leis que substituam a Constituição Federal no âmbito da saúde.",
          "Reduzir o investimento em saúde mental para focar em hormonização.",
          "Centralizar todo o atendimento LGBTQIA+ na capital do estado."
        ],
        "answerIndex": 1,
        "feedback": "Resposta: B) Adotar as diretrizes nacionais em seus planos estaduais de saúde e promover redes inclusivas. As Secretarias Estaduais de Saúde são responsáveis por adaptar e implementar as diretrizes nacionais em seus planos estaduais, coordenando redes de atenção, apoiando os municípios e promovendo ações voltadas à inclusão da população LGBTQIA+."
      },
      {
        "question": "Para que a política seja efetiva no âmbito Municipal, ela deve ser incorporada em qual instrumento de gestão?",
        "options": [
          "No Estatuto dos Funcionários Públicos Civis.",
          "No Regimento Interno da Câmara de Vereadores.",
          "No Plano Municipal de Saúde, estabelecendo metas locais.",
          "Exclusivamente em contratos com hospitais privados.",
          "Apenas em campanhas publicitárias de final de ano.\nResposta:",
          "No Plano Municipal de Saúde, estabelecendo metas locais. Justificativa:\nNo âmbito municipal, a política deve ser incorporada ao Plano Municipal de Saúde, documento que organiza as ações, define metas, indicadores e estratégias para atender às necessidades da população local. "
        ],
        "answerIndex": 0,
        "feedback": ""
      },
      {
        "question": "Qual órgão da estrutura do Ministério da Saúde tem o papel de articular a elaboração de instrumentos de orientação para os entes federados (Estados e Municípios)?",
        "options": [
          "Secretaria de Vigilância em Saúde.",
          "Conselho Federal de Medicina.",
          "Secretaria de Gestão Estratégica e Participativa (SGEP/MS).",
          "Agência Nacional de Vigilância Sanitária (ANVISA).",
          "Ministério dos Direitos Humanos e Cidadania. Justificativa:\nA Secretaria de Gestão Estratégica e Participativa (SGEP/MS) foi responsável pela articulação da elaboração da Política Nacional de Saúde Integral LGBT e pela produção de instrumentos de orientação destinados aos Estados e Municípios, fortalecendo a participação social e a implementação da política no SUS.  "
        ],
        "answerIndex": 2,
        "feedback": "Resposta: C) Secretaria de Gestão Estratégica e Participativa (SGEP/MS)."
      }
    ]
  },
  {
    "id": "uc4",
    "title": "UC4",
    "subtitle": "Plano Operacional da Política de Saúde Integral LGBTQIA+",
    "description": "O Propósito do Plano Operacional",
    "color": "#00897B",
    "content": [
      "UC4: Plano Operacional da Política de Saúde Integral LGBTQIA+",
      "O Propósito do Plano Operacional",
      "O plano tem como objetivo apresentar estratégias de gestão para as esferas federal, estadual e municipal voltadas ao enfrentamento das iniquidades e desigualdades em saúde.",
      "Seu foco principal é a promoção da saúde da população de lésbicas, gays, bissexuais, travestis e transexuais (LGBT), visando fortalecer e consolidar o Sistema Único de Saúde (SUS) como um sistema universal, integral e equitativo, garantindo o acesso à saúde com qualidade, respeito e sem discriminação.",
      "A Política Nacional de Saúde Integral de LGBTQIA+ (2011)",
      "A política teve sua criação instituída em 2011 pelo Ministério da Saúde. Tem como objetivo garantir o acesso igualitário e humanizado aos serviços de saúde para esta população no âmbito do SUS.",
      "Representa um marco histórico ao reconhecer oficialmente as necessidades específicas desta população em situação de vulnerabilidade e sua fundamentação baseia-se nos princípios de equidade da Constituição Federal e na Carta dos Direitos dos Usuários do SUS, servindo como instrumento legítimo e norteador para o acesso à saúde.",
      "Vamos ler um pouco sobre o Contexto Histórico e Movimentos Sociais?",
      "Final da década de 1970: Com a redemocratização, surgiram movimentos sociais por direitos de grupos específicos. O Grupo Somos foi pioneiro na causa homossexual no Brasil. Com o crescimento, o movimento passou a incluir lésbicas, bissexuais, travestis e transexuais (Movimento LGBT). Defendia a homossexualidade como tema político, buscando visibilidade para problemas pessoais e relações sociais.",
      "Anos 1980: Início da epidemia de HIV/AIDS, muito associada aos homens gays. O governo brasileiro apoiou mobilizações da comunidade gay masculina para prevenção, com ações eficazes no controle da disseminação no grupo. Posteriormente, a inclusão de lésbicas e travestis ampliou as discussões e mudou as estratégias de prevenção e cuidados, considerando a diversidade de identidades.",
      "Anos 1990: Lésbicas e mulheres bissexuais aproximaram-se do movimento feminista, inserindo temas como machismo, misoginia e invisibilidade feminina na pauta LGBT. Isso qualificou as discussões e deu visibilidade às lutas por direitos específicos.",
      "Reivindicações e Atuação Governamental",
      "O movimento LGBT lutava por direitos nas áreas civis, políticas, sociais e humanitárias. Tais reivindicações exigiram uma ação coordenada de diversas áreas do governo para garantir igualdade e combater a discriminação e marginalização.",
      "E você já tinha escutado falar sobre o Plano Operacional? Já pensou qual sua contribuição para efetivação deste direito da população?"
    ],
    "videoUrls": [
      "https://youtube.com/shorts/bsBV1RuyDZA"
    ],
    "questions": [
      {
        "question": "Qual é o propósito central do Plano Operacional apresentado no documento?",
        "options": [
          "Reduzir os investimentos federais em saúde pública para o público jovem.",
          "Apresentar estratégias de gestão para o enfrentamento das iniquidades e desigualdades em saúde da população LGBT.",
          "Criar um sistema de saúde paralelo e independente do SUS para atender exclusivamente lésbicas e gays.",
          "Priorizar o atendimento de saúde apenas nos grandes centros urbanos, excluindo a esfera municipal."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Isso mesmo! O documento estabelece que o plano operacional visa oferecer estratégias de gestão em todas as esferas (federal, estadual e municipal) para combater as desigualdades e fortalecer o SUS como um sistema universal e equitativo para a população LGBT."
      },
      {
        "question": "A Política Nacional de Saúde Integral de LGBTQIA+, instituída em 2011, fundamenta-se em quais pilares?",
        "options": [
          "Nos princípios de equidade da Constituição Federal e na Carta dos Direitos dos Usuários do SUS.",
          "Exclusivamente em protocolos internacionais de pesquisa sobre o HIV/AIDS.",
          "Na obrigatoriedade de planos de saúde privados oferecerem descontos para este grupo.",
          "Em normas militares de conduta e saúde pública."
        ],
        "answerIndex": 0,
        "feedback": "[Gabarito] (Alternativa A): Certo! A política de 2011 é um marco histórico que utiliza a base jurídica e ética da Constituição (princípio da equidade) e os direitos já garantidos aos usuários do SUS para assegurar um atendimento humanizado e sem discriminação."
      },
      {
        "question": "No contexto histórico brasileiro do final da década de 1970, qual organização foi pioneira na causa homossexual?",
        "options": [
          "Movimento Feminista Revolucionário.",
          "Grupo Somos.",
          "Conselho Nacional de Saúde.",
          "Frente de Prevenção às DSTs."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Exato! De acordo com o contexto histórico citado, o Grupo Somos surgiu no final dos anos 70 como pioneiro, impulsionando o movimento que passaria a incluir outras identidades como lésbicas, bissexuais e transsexuais."
      },
      {
        "question": "Durante o início da epidemia de HIV/AIDS nos anos 1980, qual foi a estratégia adotada pelo governo brasileiro em relação aos homens gays?",
        "options": [
          "O isolamento compulsório de indivíduos infectados em hospitais militares.",
          "A negação da existência da doença para evitar pânico social.",
          "O apoio a mobilização da comunidade gay masculina para ações de prevenção com eficácia sanitária.",
          "A exclusão total de lésbicas e travestis de qualquer debate sobre saúde pública. "
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Isso mesmo! O texto destaca que, diante da epidemia nos anos 80, o governo não agiu de forma punitiva, mas apoiou as mobilizações da própria comunidade gay para prevenir a doença, o que resultou em efeitos sanitários positivos."
      },
      {
        "question": "Na década de 1990, o que a aproximação de lésbicas e mulheres bissexuais com o movimento feminista inseriu na pauta LGBT?",
        "options": [
          "Temas como machismo, misoginia e a invisibilidade feminina.",
          "A discussão sobre a redução da carga horária de trabalho para mulheres.",
          "A pauta da privatização dos sistemas de saúde materno-infantil.",
          "A reivindicação por acesso exclusivo a hospitais ginecológicos privados.    "
        ],
        "answerIndex": 0,
        "feedback": "[Gabarito] (Alternativa A): Certo! Essa união entre movimentos foi fundamental para qualificar o debate LGBT, trazendo à tona problemas estruturais como o machismo e a misoginia, que afetavam especificamente a saúde e a visibilidade das mulheres dentro do movimento."
      }
    ]
  },
  {
    "id": "uc5",
    "title": "UC5",
    "subtitle": "Hormonioterapia em pessoas transgênero",
    "description": "Primeiro vamos lembrar de algumas definições sobre  Identidade de Gênero que falamos anteriormente, pode ser?",
    "color": "#1E88E5",
    "content": [
      "UC5: Hormonioterapia em Transgêneros",
      "Primeiro vamos lembrar de algumas definições sobre  Identidade de Gênero que falamos anteriormente, pode ser?",
      "Pessoa transgênero (ou trans): é aquela cuja identidade de gênero não corresponde ao gênero que lhe foi atribuído ao nascer.",
      "Mulher trans: pessoa que nasceu com sexo atribuído masculino, mas se identifica e vive como mulher.",
      "Homem trans: pessoa que nasceu com sexo atribuído feminino, mas se identifica e vive como homem.",
      "E qual o conceito da hormonioterapia?",
      "A hormonioterapia, também conhecida como terapia hormonal, é um tratamento utilizado por muitas pessoas trans e travestis para alinhar as características físicas do corpo à sua identidade de gênero, ou seja, para que seus corpos fiquem mais parecidos com o gênero com o qual se identificam.",
      "Uso de medicamentos que ajudam a diminuir ou controlar os hormônios que o corpo produz naturalmente, como o estrogênio (hormônio feminino) ou a testosterona (hormônio masculino).",
      "E quais são os principais objetivos?",
      "Promover bem-estar físico e emocional;",
      "Reduzir a incongruência de gênero;",
      "Favorecer o reconhecimento social conforme a identidade de gênero da pessoa.",
      "O tratamento é realizado por meio de medicamentos que aumentam ou bloqueiam a ação de determinados hormônios, como estrogênio e testosterona, sempre com acompanhamento de profissionais de saúde.",
      "É muito importante que você como profissional da saúde escute a pessoa que está a sua frente, seja acolhedor e tente entender como está sendo para ela este processo.",
      "Com uma escuta de qualidade você pode melhorar muito a experiência desta pessoa e minimizar algumas situações.",
      "Processo de Transição e Mudanças Físicas",
      "A transição de gênero é um processo individual que pode envolver mudanças sociais, legais e corporais.Nas mulheres trans, o uso de estrogênio pode promover:",
      "Desenvolvimento das mamas;",
      "Pele mais macia;",
      "Redistribuição da gordura corporal para um padrão mais feminino.",
      "Nos homens trans, a testosterona pode provocar:",
      "Crescimento de pelos faciais e corporais;",
      "Aumento da massa muscular;",
      "Redistribuição da gordura corporal para um padrão mais masculino;",
      "Engrossamento da voz.",
      "Segurança e Direitos no Atendimento",
      "A hormonioterapia deve ser realizada com acompanhamento médico, garantindo segurança, monitoramento dos efeitos do tratamento e prevenção de complicações.",
      "Além disso, é fundamental que os serviços de saúde respeitem o nome social e a identidade de gênero da pessoa, proporcionando um atendimento acolhedor, humanizado e livre de discriminação.",
      "Todo o processo precisa de acompanhamento médico para garantir a saúde e o bem-estar, desde a busca por ajuda até a aplicação dos hormônios.",
      "Em hospitais ou laboratórios, a pessoa deve ser chamada pelo nome que escolheu, e não pelo nome de registro. Isso evita que ela se sinta mal, envergonhada ou desrespeitada.",
      "Base Legal: O Decreto nº 8.727, de 28 de abril de 2016, estabelece que órgãos do governo e o SUS devem tratar pessoas trans com respeito, acolhimento e de acordo com sua identidade de gênero.",
      "No Brasil, esse direito é garantido pelo Decreto nº 8.727, de 28 de abril de 2016, que determina o uso do nome social e o reconhecimento da identidade de gênero nos órgãos da administração pública federal, incluindo os serviços do SUS.",
      "Como você chama o seu paciente na sala de espera hoje?",
      "Você já pensou como deve ser a sensação de ser chamado por um nome o qual você não se identifica?",
      "O Processo de Transição e Mudanças Físicas",
      "Transição: É o processo de mudar o corpo para que ele combine com a identidade de gênero da pessoa.",
      "Efeitos em Mulheres Trans: Uso de estrogênio para desenvolver seios, ter a pele mais macia e mudar a forma do corpo (distribuição da gordura).",
      "Efeitos em Homens Trans: Uso de testosterona para crescer pelos no rosto e no corpo, ganhar mais músculos e mudar a forma como a gordura é distribuída."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/Ck5j8Y5gQgA"
    ],
    "resourceLinks": [
      { "title": "Transgêneros - Educação para a Diversidade (UNESP)", "url": "https://educadiversidade.unesp.br/transgeneros/" },
      { "title": "Protocolo para atendimento de pessoas transexuais e travestis (UNIFESP)", "url": "https://nucleotrans.unifesp.br/conteudo/protocolo-para-o-atendimento-de-pessoas-transexuais-e-travestis-no-municipio-de-sao-paulo" },
      { "title": "Hormonização para pessoas trans - diretrizes médicas", "url": "https://educacaomedica.afya.com.br/blog/hormonizacao-para-pessoas-trans-diretrizes-medicas" }
    ],
    "questions": [
      {
        "question": "Como se define uma pessoa transgênero (ou trans)?",
        "options": [
          "É alguém que se identifica perfeitamente com o gênero que lhe foi atribuído ao nascer.",
          "É a pessoa cuja identidade de gênero não corresponde ao gênero atribuído no seu nascimento.",
          "É um indivíduo que necessariamente já passou por todos os procedimentos cirúrgicos de transição.",
          "É uma definição aplicada apenas a pessoas que não desejam realizar tratamentos hormonais. "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B) Isso mesmo! A alternativa B está correta porque a transexualidade é definida justamente por essa não correspondência entre a identidade de gênero e o gênero que foi atribuído à pessoa no momento do seu nascimento com base em seus órgãos genitais. O texto reforça que essa identidade é uma percepção interna e subjetiva do indivíduo sobre quem ele é."
      },
      {
        "question": "Qual é um dos principais objetivos da hormonioterapia (ou hormonização) para pessoas trans e travestis?",
        "options": [
          "Alterar a orientação sexual do indivíduo para padrões normativos",
          "Promover o bem-estar físico e emocional, reduzindo a incongruência de gênero.",
          "Servir como um tratamento temporário para condições psicológicas agudas.",
          "Garantir que o corpo produza apenas hormônios neutros, sem características de gênero."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B) Certo! A alternativa B é a correta, pois o foco principal do tratamento hormonal é promover o bem-estar físico e emocional do paciente. Ao alinhar as características físicas do corpo com a identidade de gênero, o tratamento ajuda a reduzir a \"incongruência de gênero\" e favorece o reconhecimento social da pessoa de acordo com a forma como ela se vê."
      },
      {
        "question": "No caso de homens trans, quais são os efeitos físicos esperados com o uso da testosterona?",
        "options": [
          "Desenvolvimento das mamas e suavização da pele.",
          "Crescimento de pelos faciais e corporais, aumento da massa muscular e engrossamento da voz.",
          "Redistribuição de gordura exclusivamente para a região do quadril.",
          "Redução da força física e clareamento natural da pele."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B) Exato! A alternativa B está correta porque descreve as mudanças biológicas típicas provocadas pelos hormônios masculinos (andrógenos) no corpo. A testosterona é responsável por induzir o crescimento de pelos (faciais e corporais), o aumento da massa muscular e o engrossamento da voz, além de redistribuir a gordura corporal para um padrão masculino."
      },
      {
        "question": "Por que o acompanhamento médico e da equipe multiprofissional  é considerado indispensável durante o processo de hormonização?",
        "options": [
          "Para garantir que o paciente siga padrões estéticos universais de beleza.",
          "Para que o médico e a equipe possam legalmente impedir a transição se discordar dela.",
          "Para garantir a segurança, monitorar os efeitos do tratamento e prevenir complicações de saúde.",
          "Porque os medicamentos hormonais são suplementos vitamínicos de alta dosagem."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C) Isso mesmo! A alternativa C é a correta porque a hormonização não é apenas uma mudança estética, mas um processo clínico que altera o funcionamento do organismo. O acompanhamento profissional é essencial para garantir a segurança do paciente, monitorar como o corpo está reagindo aos medicamentos e prevenir complicações de saúde que podem surgir se as doses não forem controladas adequadamente."
      },
      {
        "question": "Qual dispositivo legal assegura o uso do nome social e o reconhecimento da identidade de gênero no SUS e em órgãos federais?",
        "options": [
          "O Código Civil Brasileiro em seu capítulo sobre registros públicos.",
          "A Lei de Diretrizes e Bases da Educação Nacional.",
          "O Decreto nº 8.727, de 28 de abril de 2016.",
          "Uma portaria interna exclusiva para hospitais privados de alta complexidade.  "
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C) Certo! A alternativa C está correta ao identificar o Decreto nº 8.727, de 28 de abril de 2016. Este é o dispositivo legal específico que obriga os órgãos da administração pública federal e os serviços do SUS a respeitarem e utilizarem o nome social e a reconhecerem a identidade de gênero de travestis e transexuais, garantindo um atendimento digno e livre de discriminação."
      }
    ]
  },
  {
    "id": "uc6",
    "title": "UC6",
    "subtitle": "Questões de saúde da comunidade LGBTQIA+",
    "description": "Contexto e Desafios no Acesso à Saúde",
    "color": "#5E35B1",
    "content": [
      "UC6: Compreensão Das Questões De Saúde Da Comunidade LGBTQIA+",
      "Contexto e Desafios no Acesso à Saúde",
      "O Dia Internacional do Orgulho Gay (28 de junho), foi criado para alertar sobre a importância do combate à homofobia e a construção de uma sociedade livre de preconceitos de gênero e orientação sexual. Estas barreiras e comportamento dos profissionais dificultam o acesso das pessoas ao serviço de saúde.",
      "Pesquisas, como a liderada pela USP (Universidade de São Paulo), revelam que a comunidade LGBTQIA+ possui maior dificuldade de acesso ao atendimento à saúde em comparação ao restante da população. Será que isso acontece por algum comportamento nosso como profissional da saúde?",
      "Conquistas e Marcos de Igualdade relacionado a saúde da comunidade",
      "Despatologização: A transsexualidade foi retirada da categoria de transtornos mentais na 10ª Classificação Internacional de Doenças (CID-10).",
      "Educação e Inclusão: Política de cotas em universidades públicas e privadas.",
      "Gestão Pública (2003-2016): Período marcado por um olhar progressista que estimulou pesquisas em HIV/Aids e DSTs, além de mudanças nos protocolos de prevenção.",
      "Programas Citados: Brasil Sem Homofobia, Plano Nacional de Promoção da Cidadania e Direitos Humanos de LGBT e a Política Nacional de Saúde Integral de LGBTQIA+.",
      "A saúde da população LGBTQIA+ é um importante tema da Saúde Coletiva, pois está diretamente relacionada ao direito universal à saúde, à cidadania e ao respeito aos direitos humanos.",
      "Apesar dos avanços conquistados nas últimas décadas, essa população ainda enfrenta inúmeras barreiras para acessar os serviços de saúde. O preconceito, a discriminação, a violência e a falta de preparo de muitos profissionais fazem com que diversas pessoas deixem de procurar atendimento ou interrompam tratamentos por receio de sofrerem situações constrangedoras.",
      "Essas dificuldades aumentam a vulnerabilidade a diversos agravos e contribuem para a manutenção das desigualdades em saúde.",
      "Sim, é isso mesmo, estas pessoas procuram menos os serviços de saúde, com isso, adoecem mais ou tem menos oportunidade de promover saúde. E nós profissionais da saúde temos responsabilidades frente a esta situação.",
      "Nesse contexto, o Dia Internacional do Orgulho LGBTQIA+, celebrado em 28 de junho, representa muito mais do que uma data comemorativa. A ocasião simboliza a luta histórica contra a discriminação e reforça a importância da construção de uma sociedade baseada no respeito às diferenças.",
      "A data também chama a atenção para a necessidade de combater a homofobia, a transfobia e outras formas de violência que afetam diretamente a qualidade de vida e o acesso aos serviços públicos, especialmente na área da saúde.",
      "Ao longo dos anos, importantes conquistas foram alcançadas. Entre elas destaca-se a despatologização da transsexualidade, um marco histórico que reconhece que a identidade de gênero não deve ser considerada um transtorno mental. Essa mudança contribuiu para reduzir o estigma sofrido pelas pessoas trans e fortaleceu a defesa de seus direitos. Paralelamente, políticas públicas voltadas para a população LGBTQIA+ passaram a ser desenvolvidas, como o Programa Brasil Sem Homofobia, o Plano Nacional de Promoção da Cidadania e Direitos Humanos de LGBT e a Política Nacional de Saúde Integral da",
      "Essas iniciativas buscam reduzir as desigualdades, promover a inclusão social e garantir um atendimento digno e humanizado no Sistema Único de Saúde (SUS).",
      "A Política Nacional de Saúde Integral da População LGBT representa um importante instrumento para orientar as ações dos serviços de saúde. Seu principal objetivo é combater a discriminação institucional, ampliar o acesso aos serviços e promover um cuidado integral, considerando as necessidades específicas dessa população. A política também incentiva a capacitação permanente dos profissionais de saúde, a produção de conhecimentos científicos e a implementação de estratégias que garantam a equidade, um dos princípios fundamentais do SUS.",
      "É isso que você está fazendo agora, parabéns! Você está buscando mais conhecimento e sensibilização sobre o assunto.",
      "Nesse cenário, a enfermagem possui papel essencial. Como frequentemente é a primeira equipe a acolher o usuário nos serviços de saúde, seus profissionais devem estabelecer uma relação baseada no respeito, na ética e na escuta qualificada. Isso significa utilizar o nome social e o pronome escolhidos pela pessoa, preservar sua privacidade, manter o sigilo das informações e evitar perguntas desnecessárias ou baseadas em preconceitos.",
      "O atendimento deve considerar cada indivíduo em sua singularidade, sem pressupor orientação sexual ou identidade de gênero, oferecendo um ambiente seguro e acolhedor.",
      "Outro conceito fundamental para compreender as desigualdades em saúde é a interseccionalidade. Esse princípio demonstra que diferentes formas de discriminação podem ocorrer simultaneamente. Assim, fatores como raça, etnia, classe social, território, deficiência, idade e identidade de gênero influenciam diretamente as condições de vida e o acesso aos serviços de saúde. Muitas pessoas são atravessadas por várias camadas de discriminação e preconceito.",
      "Dessa forma, uma pessoa LGBTQIA+ negra, periférica e em situação de vulnerabilidade social pode enfrentar obstáculos muito maiores do que outra pessoa pertencente ao mesmo grupo, porém com melhores condições socioeconômicas. Reconhecer essas diferenças permite que os profissionais desenvolvam um cuidado mais justo, individualizado e equitativo.",
      "A defesa dos direitos humanos também é um elemento indispensável para a promoção da saúde dessa população. Esses princípios reforçam que todas as pessoas têm direito à igualdade, à dignidade, à educação, ao trabalho e ao acesso aos serviços de saúde sem qualquer forma de discriminação. Embora não tenham força de lei, servem como referência para a elaboração de políticas públicas e para o fortalecimento da proteção dos direitos da população LGBTQIA+.",
      "Por fim, a educação exerce papel decisivo na redução das desigualdades. A construção de ambientes escolares, serviços de saúde e ambiente de trabalho que valorizem a diversidade contribui para diminuir o preconceito desde a infância e promove uma sociedade mais inclusiva.",
      "Da mesma forma, a educação permanente dos profissionais de saúde favorece um atendimento mais humanizado e qualificado. Garantir assistência integral à população LGBTQIA+ significa reconhecer suas necessidades específicas, combater as desigualdades históricas e assegurar que os princípios de universalidade, integralidade, equidade e humanização do SUS sejam efetivamente colocados em prática."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/LXEIFul_HeU"
    ],
    "questions": [
      {
        "question": "A dificuldade de acesso da população LGBTQIA+ aos serviços de saúde está relacionada, principalmente:",
        "options": [
          "À falta de hospitais especializados exclusivamente para essa população.",
          "Ao preconceito, à discriminação, à violência e ao despreparo de parte dos profissionais de saúde, fatores que podem afastar usuários dos serviços.",
          "A inexistência de políticas públicas voltadas para a promoção da saúde da população LGBTQIA+.",
          "Apenas às condições socioeconômicas da população."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Isso mesmo! O texto destaca que a população LGBTQIA+ enfrenta dificuldades de acesso aos serviços de saúde em razão do preconceito, da discriminação, da violência e da falta de preparo de muitos profissionais. Esses fatores fazem com que diversas pessoas deixem de procurar atendimento ou abandonem tratamentos, aumentando sua vulnerabilidade e contribuindo para a manutenção das desigualdades em saúde."
      },
      {
        "question": "A despatologização da transsexualidade representou um importante avanço porque:",
        "options": [
          "Tornou obrigatória a realização da cirurgia de afirmação de gênero pelo SUS.",
          "Passou a considerar a identidade de gênero como uma doença infectocontagiosa.",
          "Reconheceu que a identidade de gênero não deve ser tratada como transtorno mental, reduzindo o estigma e fortalecendo os direitos das pessoas trans.",
          "Eliminou a necessidade de políticas públicas voltadas para essa população."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Certo! A despatologização da transsexualidade representou um importante avanço no reconhecimento dos direitos das pessoas trans, ao afirmar que a identidade de gênero não constitui um transtorno mental. Essa mudança reduziu o estigma social, fortaleceu o respeito à diversidade e favoreceu a construção de políticas públicas mais inclusivas."
      },
      {
        "question": "Em relação ao atendimento humanizado prestado pelos profissionais de enfermagem à população LGBTQIA+, assinale a alternativa correta.",
        "options": [
          "O profissional deve utilizar exclusivamente o nome presente no documento oficial.",
          "É recomendado evitar conversar sobre identidade de gênero para não constranger o paciente.",
          "O atendimento deve respeitar o nome social, o pronome escolhido, garantir privacidade, sigilo e acolhimento livre de preconceitos.",
          "O profissional deve presumir a orientação sexual do paciente para facilitar o atendimento."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Exato! O atendimento humanizado exige que os profissionais de saúde respeitem o nome social, o pronome escolhido pela pessoa, garantam privacidade, sigilo e uma escuta qualificada, promovendo um ambiente acolhedor e livre de preconceitos. Essas práticas fortalecem o vínculo entre profissional e paciente e favorecem o acesso aos serviços de saúde."
      },
      {
        "question": "O conceito de interseccionalidade é importante na saúde porque:",
        "options": [
          "Considera apenas a orientação sexual como fator determinante das desigualdades.",
          "Demonstra que fatores como raça, classe social, território, deficiência e identidade de gênero podem atuar simultaneamente, influenciando o acesso aos serviços de saúde.",
          "Defende que todas as pessoas LGBTQIA+ vivenciam as mesmas dificuldades, independentemente de sua realidade social.",
          "Limita a assistência apenas às questões relacionadas à identidade de gênero."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Isso mesmo! A interseccionalidade demonstra que diferentes fatores sociais, como raça, etnia, classe social, território, deficiência, idade e identidade de gênero, podem atuar simultaneamente, aumentando ou reduzindo as desigualdades vivenciadas por uma pessoa. Esse conceito permite compreender que nem todas as pessoas LGBTQIA+ enfrentam as mesmas dificuldades, sendo necessário considerar a realidade individual para oferecer um cuidado mais equitativo."
      },
      {
        "question": "Sobre a Política Nacional de Saúde Integral da População LGBT, assinale a alternativa correta.",
        "options": [
          "Seu principal objetivo é restringir o atendimento da população LGBTQIA+ a serviços especializados.",
          "Tem como finalidade combater a discriminação institucional, ampliar o acesso aos serviços de saúde e promover um cuidado integral e humanizado.",
          "Destina-se exclusivamente às pessoas trans em processo de hormonização.",
          "Substitui os princípios de universalidade, integralidade e equidade do SUS.  "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Certo! A Política Nacional de Saúde Integral da População LGBT foi criada para combater a discriminação institucional, ampliar o acesso aos serviços de saúde e promover uma assistência integral, humanizada e de qualidade. Além disso, incentiva a capacitação dos profissionais e fortalece os princípios da universalidade, integralidade e equidade do Sistema Único de Saúde (SUS)."
      }
    ]
  },
  {
    "id": "uc7",
    "title": "UC7",
    "subtitle": "Envelhecimento da comunidade LGBTQIA+",
    "description": "O Brasil possui um dos mais elevados níveis de população idosa, e este número é ascendente, porém, entende-se que viver por mais tempo não é sinônimo de viver melhor ou desfrutar de qualidade de vida.",
    "color": "#8E24AA",
    "content": [
      "UC7: Envelhecimento da Comunidade LGBTQIA+",
      "O Brasil possui um dos mais elevados níveis de população idosa, e este número é ascendente, porém, entende-se que viver por mais tempo não é sinônimo de viver melhor ou desfrutar de qualidade de vida.",
      "A velhice pode estar associada ao sofrimento, aumento da dependência física, declínio funcional, isolamento social, depressão, improdutividade, sensação de inutilidade e outros fatores que não representam significados positivos. Porém, é possível viver mais com qualidade de vida, através da busca do envelhecimento como um processo, com independência e autonomia, com boa saúde física e mental.",
      "O envelhecimento populacional constitui um dos fenômenos sociodemográficos mais relevantes das últimas décadas, produzindo transformações importantes nas formas de organização social, nas políticas públicas e nas demandas em saúde. Entretanto, embora o aumento da expectativa de vida seja uma realidade observada em diversos países, nem todos os sujeitos envelhecem sob as mesmas condições materiais, simbólicas e afetivas.",
      "Entre os grupos historicamente atravessados por processos de exclusão e invisibilidade, destaca-se a população LGBT+, cujas experiências de envelhecimento permanecem, em grande medida, marginalizadas no campo científico, institucional e social.",
      "Historicamente, os estudos sobre envelhecimento foram construídos a partir de perspectivas heterocentradas - ou seja, apenas em pessoas heterossexuais - frequentemente desconsiderando as especificidades das vivências relacionadas à diversidade sexual e de gênero.",
      "Como consequência, a velhice LGBT+ permaneceu durante décadas silenciada, invisibilizada ou reduzida a abordagens estigmatizantes, centradas exclusivamente na doença, no isolamento ou na vulnerabilidade. Tal cenário contribuiu para a construção de uma representação social que frequentemente exclui pessoas LGBT+ do imaginário coletivo sobre envelhecimento, afetividade e sexualidade. Com isso, nos serviços de saúde este processo de exclusão é ainda mais agravante.",
      "O envelhecimento e a velhice LGBT podem ocorrer na presença de depressão ou sintomas depressivos e de outras comorbidades, além de que essas variáveis normalmente se interseccionam, agravando ainda mais.",
      "Como esperado,  a  discriminação  percebida  ao  longo  da  vida  e  aquela  internalizada  também  se  relacionam  a desfechos ruins sobre a saúde mental e física. A discussão e abordagem acerca da orientação sexual e identidade de gênero de pessoas em processo de envelhecimento e idosos ainda encontra barreiras por parte dos profissionais de saúde e população em geral.",
      "As  pessoas  em  processo  de  envelhecimento  são  vítimas  de  violências  e problemas psicológicos, que impactam diretamente a qualidade de vida dos indivíduos.",
      "Quando associadas às minorias sociais, torna-se um problema de saúde pública. Ao longo da vida, as minorias sexuais enfrentam constantes discriminações, que se tornam ainda mais intensas na velhice, assim um grupo duplamente vulnerável.",
      "Isso impacta na saúde mental destes indivíduos, sendo significativo para o desenvolvimento de sofrimentos psíquicos, depressão, ansiedade e ideação suicida.",
      "São por estes motivos que nós profissionais da saúde precisamos repensar nossos atendimentos, nossas estratégias de acolhimento e escuta dessas pessoas.",
      "Lhe convidamos a pensar sobre o seu dia a dia, quantas pessoas idosas que se identificam como pessoas da comunidade LGBT em  seu serviço de saúde?",
      "Você possui um controle epidemiológico, sobre quem são e em qual território estas pessoas estão inseridas?"
    ],
    "videoUrls": [
      "https://youtube.com/shorts/a9GoyZCfQR0"
    ],
    "questions": [
      {
        "question": "Como se descreve a relação entre o envelhecimento LGBTQIA+, a depressão e outras comorbidades?",
        "options": [
          "São variáveis isoladas que raramente se encontram no mesmo indivíduo.",
          "Essas variáveis normalmente se interseccionam, agravando o quadro de saúde do idoso.",
          "A depressão é um sintoma obrigatório e exclusivo de idosos transgêneros.",
          "Comorbidades físicas impedem o desenvolvimento de sintomas depressivos."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Exato! O material enfatiza o conceito de interseccionalidade, onde diferentes problemas (como doenças físicas e depressão) não ocorrem sozinhos, mas se misturam e tornam a situação do idoso LGBTQIA+ mais complexa e grave."
      },
      {
        "question": "Qual é uma das principais barreiras identificadas para a discussão sobre orientação sexual e identidade de gênero na terceira idade?",
        "options": [
          "A falta de interesse da própria população idosa em buscar serviços de saúde.",
          "A resistência de jovens LGBTQIA+ em conviver com pessoas mais velhas.",
          "As barreiras por parte dos profissionais de saúde e da população em geral em abordar o tema.",
          "A proibição legal de tratar desses temas com pessoas acima de 60 anos."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Certo! A correção reside no fato de que o despreparo ou o tabu dos profissionais de saúde em falar sobre sexualidade com idosos impede um acolhimento adequado e um diagnóstico preciso de suas necessidades."
      },
      {
        "question": "Por que os idosos pertencentes a minorias sexuais são considerados um grupo de \"dupla vulnerabilidade\"?",
        "options": [
          "Porque enfrentam os desafios biológicos do envelhecimento somados à discriminação constante que se intensifica na velhice.",
          "Devido à necessidade de tratamento hormonal e cirúrgico simultâneo.",
          "Por possuírem menor nível de escolaridade do que os idosos heterossexuais.",
          "Pela impossibilidade de acesso a planos de saúde privados. "
        ],
        "answerIndex": 0,
        "feedback": "[Gabarito] (Alternativa A): Isso mesmo! A \"dupla vulnerabilidade\" ocorre porque o indivíduo sofre tanto pelo etarismo (preconceito contra a idade) quanto pela LGBTfobia que já o perseguia, tornando o envelhecimento um processo mais hostil."
      },
      {
        "question": "O impacto da violência e dos problemas psicológicos na vida do idoso LGBTQIA+ pode resultar em quais desfechos graves, segundo o material?",
        "options": [
          "Aumento da busca por atividades de lazer coletivas.",
          "Melhora a resiliência emocional devido às experiências passadas.",
          "Sofrimentos psíquicos, depressão, ansiedade e ideação suicida.",
          "Redução da necessidade de acompanhamento ginecológico ou urológico.    "
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Exato! Esta alternativa é a correta pois lista exatamente os riscos à saúde mental mencionados no texto como consequência das violências e da falta de suporte social adequado para essa população."
      }
    ]
  },
  {
    "id": "uc8",
    "title": "UC8",
    "subtitle": "Serviços e organizações de apoio LGBTQIA+",
    "description": "Os serviços e organizações de apoio LGBTQIA+ desempenham um papel fundamental na promoção dos direitos humanos, na redução da discriminação e no fortalecimento da comunidade.",
    "color": "#D81B60",
    "content": [
      "UC8: Serviços e Organizações de Apoio LGBTQIA+",
      "Os serviços e organizações de apoio LGBTQIA+ desempenham um papel fundamental na promoção dos direitos humanos, na redução da discriminação e no fortalecimento da comunidade.",
      "Essas instituições oferecem acolhimento, apoio psicológico, orientação jurídica, assistência social e espaços seguros para pessoas da comunidade.",
      "No Brasil, existem entidades de referência como a ABGLT (Associação Brasileira de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Intersexos), que atua na defesa de políticas públicas inclusivas e na conscientização da sociedade sobre a diversidade sexual e de gênero.",
      "Também existem organizações locais e coletivas que oferecem atendimento individualizado, grupos de apoio e campanhas de educação sobre direitos, saúde sexual e combate à violência.",
      "Esses serviços são essenciais para a construção de uma sociedade mais justa e plural, promovendo visibilidade e dignidade, além de servir como ponte entre indivíduos e políticas de proteção social.",
      "Você já pensou em direcionar algum usuário para estes serviços, ONG’s ou instituições?",
      "Esta participação pode contribuir para uma maior integração entre os serviços de saúde, maior pertencimento e inclusão das pessoas da comunidade.",
      "Em São Leopoldo existe um AMBULATÓRIO LGBTQIA+, localizado no Centro Médico Capilé, na Rua Conceição 679. As equipe contam com profissionais de saúde,  estagiários e uma jovem aprendiz, onde são ofertados:",
      "-Acolhimento Emergencial;",
      "-Serviço Social;",
      "-Psicologia;",
      "-Nutrição;",
      "-Medicina;"
    ],
    "videoUrls": [
      "https://youtube.com/shorts/Y1eRQKgrQPQ"
    ],
    "questions": [
      {
        "question": "Qual a função primordial das organizações de apoio LGBTQIA+?",
        "options": [
          "Geração de lucro privado.",
          "Promoção dos direitos humanos e redução da discriminação.",
          "Incentivo ao isolamento da comunidade.",
          "Fiscalização de tributos. "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Correto! Elas são fundamentais para fortalecer a comunidade e promover dignidade e visibilidade."
      },
      {
        "question": "Qual a principal frente de atuação da ABGLT no Brasil?",
        "options": [
          "Expansão de empresas.",
          "Defesa de políticas públicas inclusivas e conscientização.",
          "Atuação apenas em eventos festivos.",
          "Gestão de hospitais privados. "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Exato! A ABGLT é referência na proteção social e educação sobre diversidade."
      },
      {
        "question": "Quais serviços de suporte são comumente oferecidos por essas entidades?",
        "options": [
          "Apenas entretenimento.",
          "Apoio psicológico, orientação jurídica e assistência social.",
          "Consultoria de investimentos.",
          "Treinamento militar. "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Isso mesmo! Esses serviços garantem acolhimento e segurança aos indivíduos."
      },
      {
        "question": "Qual a importância dos coletivos locais mencionada no texto?",
        "options": [
          "Oferecer atendimento individualizado e educação em saúde.",
          "Criar barreiras burocráticas.",
          "Substituir o governo federal.",
          "Organizar apenas viagens. "
        ],
        "answerIndex": 0,
        "feedback": "[Gabarito] (Alternativa A): Correto! Eles atuam diretamente no suporte e combate à violência."
      },
      {
        "question": "Esses serviços funcionam como uma \"ponte\" para qual finalidade?",
        "options": [
          "O isolamento geográfico.",
          "O acesso a políticas de proteção social.",
          "O aumento da burocracia.",
          "A censura de identidades.     "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Perfeito! Facilitam a conexão entre a pessoa e seus direitos garantidos."
      }
    ]
  },
  {
    "id": "uc9",
    "title": "UC9",
    "subtitle": "Abordagem clínica inclusiva LGBTQIA+",
    "description": "A comunicação clara",
    "color": "#6D4C41",
    "content": [
      "UC9: Abordagem Clínica Inclusiva LGBTQIA+",
      "A comunicação clara",
      "A população composta por lésbicas, gays, bissexuais, travestis e transexuais (LGBT+) frequentemente enfrenta discriminação e violência por não se adequar aos padrões tradicionais de sexualidade e gênero, o que resulta na retirada de direitos, sofrimento, adoecimento e morte prematura.",
      "O acesso à saúde e aos serviços assistenciais é marcado por barreiras significativas; mulheres lésbicas, por exemplo, procuram menos o atendimento ginecológico do que mulheres heterossexuais devido ao despreparo dos profissionais, que gera uma assistência insuficiente e pouco acolhedora.",
      "Soma-se a isso a ideia equivocada de que essas mulheres possuem menor risco de contrair infecções e doenças sexualmente transmissíveis, afastando-as ainda mais dos serviços de saúde.",
      "Para reverter esse quadro, é fundamental que os profissionais saibam abordar o paciente perguntando seu nome e pronome de escolha, tratando-o com igualdade e empatia para promover uma melhor qualidade de vida.",
      "Além disso, indagar sobre a orientação individual é uma obrigação do profissional para garantir a eficácia do atendimento e combater a indiferença e o mau atendimento relatados por grande parte dessa população.",
      "História Clínica Inclusiva",
      "A implementação da política nacional voltada para a saúde integral da população LGBT+ permitiu o reconhecimento oficial das dificuldades de acesso enfrentadas por esse grupo.",
      "Embora se perceba um avanço em direção à igualdade no SUS, ainda persistem questões preconceituosas que exigem o aperfeiçoamento e o treinamento constante dos profissionais de saúde para garantir um atendimento de qualidade.",
      "Enquanto a população LGBT+ busca manter-se informada e praticar o autocuidado, os esforços para uma assistência eficiente requerem o envolvimento de todos na prevenção e promoção da saúde. Nesse sentido, acredita-se que a inclusão dessas abordagens já na formação acadêmica possibilitará aos profissionais uma percepção mais sensível e adequada frente ao cuidado oferecido durante as internações e atendimentos gerais.",
      "Necessidades Específicas",
      "A população LGBT+ ocupa espaços cada vez mais visíveis, fazendo com que demandas e direitos específicos se tornem realidade e exijam que o acesso à saúde seja adequado às diferentes identidades de gênero e orientações sexuais da sociedade.",
      "Atualmente, a frequência aos serviços de saúde ainda é limitada por práticas profissionais discriminatórias, onde a exposição da sexualidade e da identidade de gênero muitas vezes agrava a vulnerabilidade do usuário.",
      "O atendimento é frequentemente baseado na suposição de que todas as pessoas são heterossexuais e seguem um modelo binário de gênero, resultando na negligência de necessidades específicas e gerando resistência na busca por serviços.",
      "Portanto, os profissionais devem ser capacitados para reconhecer e respeitar a diversidade, adotando práticas inclusivas e livres de discriminação, o que contribui para a construção de um sistema de saúde mais equitativo e acessível para todos.",
      "Promoção de Auto Cuidado",
      "As necessidades de saúde da população LGBT+ devem ser atendidas de forma relevante e sem pressões, com a política nacional reconhecendo a identidade de gênero como um fator determinante do processo saúde-doença. Com base nisso, propõem-se estratégias para melhorar o bem-estar deste grupo e reduzir desigualdades no acesso a direitos fundamentais como moradia, trabalho, educação e lazer, incentivando o vínculo com os serviços para um cuidado longitudinal e autônomo.",
      "Para que a saúde integral seja efetiva, a Atenção Primária à Saúde (APS) deve assumir o papel de coordenadora do cuidado na Rede de Atenção à Saúde (RAS), garantindo acolhimento e escuta qualificada.",
      "As ações desenvolvidas pelas equipes de saúde da família têm impacto significativo na qualidade de vida através do acesso a tecnologias e serviços éticos. O objetivo final é orientar e sensibilizar essas equipes para que a assistência às demandas integradas da população LGBT+ ocorra de forma humanizada e adequada."
    ],
    "videoUrls": [
      "https://youtube.com/shorts/bsBV1RuyDZA?feature=share"
    ],
    "resourceLinks": [
      { "title": "Política Nacional de Saúde Integral LGBT - Ministério da Saúde", "url": "https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_saude_lesbicas_gays.pdf" }
    ],
    "questions": [
      {
        "question": "De acordo com o texto, qual é um dos principais motivos para mulheres lésbicas buscarem menos o atendimento ginecológico do que mulheres heterossexuais?",
        "options": [
          "A ausência total de risco de contrair infecções sexualmente transmissíveis.",
          "A preferência por realizar o autocuidado exclusivamente em domicílio.",
          "O despreparo dos profissionais, que resulta em uma assistência insuficiente e pouco acolhedora.",
          "A proibição legal de atendimento para esse grupo em unidades básicas de saúde."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Isso mesmo! O texto destaca que o despreparo profissional cria barreiras, resultando em uma assistência que não acolhe as especificidades de mulheres lésbicas, afastando-as da prevenção."
      },
      {
        "question": "Para promover a qualidade de vida e a dignidade no atendimento à população LGBT+, qual conduta é considerada fundamental para o profissional de saúde?",
        "options": [
          "Utilizar apenas o nome do documento oficial para evitar erros burocráticos.",
          "Abordar o paciente perguntando seu nome e pronome de escolha.",
          "Evitar perguntas sobre orientação sexual para não constranger o usuário.",
          "Assumir que o paciente segue um modelo binário de gênero para agilizar o prontuário."
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Certo! A utilização do nome e pronome de escolha é citada como essencial para garantir um atendimento baseado na igualdade, empatia e respeito à identidade do paciente."
      },
      {
        "question": "Sobre a formação dos profissionais de saúde, o que o texto sugere para possibilitar uma percepção mais sensível frente ao cuidado dessa população?",
        "options": [
          "A inclusão de abordagens clínicas inclusivas já na formação acadêmica.",
          "A substituição de todos os profissionais atuais por especialistas em gênero.",
          "O foco exclusivo em tratamentos de alta complexidade em detrimento da prevenção.",
          "A restrição do debate sobre diversidade apenas para conselhos de classe."
        ],
        "answerIndex": 0,
        "feedback": "[Gabarito] (Alternativa A): A fonte afirma que incluir essas discussões na base da formação acadêmica prepara melhor os futuros profissionais para oferecer um cuidado humanizado e adequado."
      },
      {
        "question": "Qual é a consequência de atendimentos baseados na suposição de que todas as pessoas são heterossexuais e seguem modelos binários de gênero?",
        "options": [
          "Uma assistência mais rápida e padronizada para todos os cidadãos.",
          "O fortalecimento do vínculo entre o usuário e o serviço de saúde.",
          "A negligência de necessidades específicas e a geração de resistência na busca por serviços.",
          "A eliminação automática do preconceito institucional no SUS."
        ],
        "answerIndex": 2,
        "feedback": "[Gabarito] (Alternativa C): Exato! A presunção da heterossexualidade inviabiliza as demandas reais da população LGBT+, agravando sua vulnerabilidade e afastando-a do sistema de saúde."
      },
      {
        "question": "Qual nível de atenção à saúde deve assumir o papel de coordenadora do cuidado para garantir que a saúde integral LGBT+ seja efetiva?",
        "options": [
          "Os hospitais de alta complexidade e centros cirúrgicos.",
          "A Atenção Primária à Saúde (APS).",
          "Exclusivamente os centros de pesquisa internacionais.",
          "As secretarias de segurança pública estaduais.  "
        ],
        "answerIndex": 1,
        "feedback": "[Gabarito] (Alternativa B): Isso mesmo! Conforme o documento, a APS é a responsável por coordenar o cuidado na Rede de Atenção à Saúde (RAS), garantindo o acolhimento e o vínculo longitudinal com o usuário."
      }
    ]
  }
];

export function getModuleById(id?: string | string[]) { const moduleId = Array.isArray(id) ? id[0] : id; return modules.find(item => item.id === moduleId); }
