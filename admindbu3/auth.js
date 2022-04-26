const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//const providerF = new firebase.auth.FacebookAuthProvider();

//Abrir la ventana de auth en español
auth.languageCode = "es";

export async function login(){
    try {
        const response = await auth.signInWithPopup(provider);
        console.log("Funciona");
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
}

export function logout(){
    auth.signOut();
}
