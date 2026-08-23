import { auth } from "../firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { afficherTableauDeBord } from "./tableauDeBord";

export async function creerCompte(email, motDePasse) {

    try {

        const utilisateur = await createUserWithEmailAndPassword(
            auth,
            email,
            motDePasse
        );

        console.log("Compte créé :", utilisateur.user.email);

    } catch (erreur) {

        console.error(erreur.message);

    }

}
export async function connexion(email, motDePasse) {

    try {

        const utilisateur = await signInWithEmailAndPassword(
            auth,
            email,
            motDePasse
        );

        afficherTableauDeBord(
    utilisateur.user.email,
    utilisateur.user.uid
);

    } catch (erreur) {

        console.error("Erreur de connexion :", erreur.message);

    }

}