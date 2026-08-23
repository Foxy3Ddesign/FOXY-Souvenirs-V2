import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function creerAlbum(
    nom,
    date,
    description,
    uid
) {

    try {

        // Génère un lien public unique
        const lienPublic = crypto.randomUUID().replace(/-/g, "").substring(0, 12);

        const docRef = await addDoc(collection(db, "albums"), {

            // Informations principales
            nom: nom,
            date: date,
            description: description,

            // Organisateur
            proprietaire: uid,

            // Page publique
            lienPublic: lienPublic,
            messageBienvenue: "",
            photoCouverture: "",

            // Paramètres
            actif: true,

            // Dates
            creeLe: new Date()

        });

        console.log("Album créé :", docRef.id);
        console.log("Lien public :", lienPublic);

    } catch (erreur) {

        console.error(erreur);

    }

}