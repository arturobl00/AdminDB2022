const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//Abrir la ventana de auth en español
auth.languageCode = "es";

export async function login(){
    try {
        const response = await auth.signInWithPopup(provider);
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
}

export function logout(){
    auth.signOut();
}
