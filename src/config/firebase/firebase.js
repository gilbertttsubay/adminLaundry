import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
}

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig) // inisialisasi config firebase
        this.auth = app.auth() // inisialisasi authorization 

        // For Firestore
        this.fieldValue = app.firestore.FieldValue;
        this.db = app.firestore();
    }

    // memanggil data Admins, Users dan transaksi di cloud firestore
    adminsDb = () => this.db.collection("admins")
    usersDb = () => this.db.collection("customers")
    transactionDb = () => this.db.collection("transactions")

    // Login with email and password
    loginFirebaseUser = (user) => {
        return this.auth.signInWithEmailAndPassword(user.email, user.password)
    }

    // Logout user
    logoutFirebaseUser = () => this.auth.signOut()
}

export default Firebase