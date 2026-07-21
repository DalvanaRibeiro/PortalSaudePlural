import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig={apiKey:'AIzaSyD9lKomLcz_pYcGUoWsNHspIPvcDk69RNg',authDomain:'reactnative-a0810.firebaseapp.com',databaseURL:'https://reactnative-a0810-default-rtdb.firebaseio.com',projectId:'reactnative-a0810',storageBucket:'reactnative-a0810.firebasestorage.app',messagingSenderId:'396494139064',appId:'1:396494139064:web:c8cd5352f31e58d2950e4d',measurementId:'G-YYCKG56Z2B'};
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
