import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";


const firebaseConfig = 
{
  apiKey: "AIzaSyCe6_HmCtXESIdPK3QIgxrHCG9WTzWmDNo",
  authDomain: "novarepotential-17e55.firebaseapp.com",
  projectId: "novarepotential-17e55",
  storageBucket: "novarepotential-17e55.appspot.com",
  messagingSenderId: "77424037212",
  appId: "1:77424037212:web:72a089b3f407949462c599"
};


firebase.initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = firebase.auth();
export default firebase;

export const signInWithEmailAndPassword = async (email, password) => 
{
  try 
  {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};


export const registerWithEmailAndPassword = async (name, email, password) => 
{
  try 
  {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};
