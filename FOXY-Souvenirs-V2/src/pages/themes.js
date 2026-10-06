import { db } from "../firebase/firebase";
import {
    collection,
    addDoc,
    getDocs
} from "firebase/firestore";

export async function afficherThemes(albumId) {

    document.querySelector("#contenu").innerHTML = `

        <h2>Thèmes de l'album</h2>

        <button id="ajouterTheme" class="btn">
            Ajouter un thème
        </button>

        <br><br>

        <div id="listeThemes">
            Chargement...
        </div>

        <br>

        <button id="retourGestion" class="btn">
            Retour
        </button>

    `;

    const liste = document.querySelector("#listeThemes");

    const themesRef = collection(
        db,
        "albums",
        albumId,
        "themes"
    );

    const snapshot = await getDocs(themesRef);

    liste.innerHTML = "";

    if (snapshot.empty) {

        liste.innerHTML = `
            <p>Aucun thème pour le moment.</p>
        `;

    }

    snapshot.forEach((doc) => {

        const theme = doc.data();

        liste.innerHTML += `

            <div class="theme">

                <h3>${theme.nom}</h3>

                <hr>

            </div>

        `;

    });

    document.querySelector("#ajouterTheme").addEventListener(
        "click",
        async () => {

            const nom = prompt("Nom du thème :");

            if (!nom) {
                return;
            }

            await addDoc(themesRef, {

                nom: nom,
                ordre: snapshot.size + 1

            });

            afficherThemes(albumId);

        }
    );

    document.querySelector("#retourGestion").addEventListener(
        "click",
        () => {

            location.reload();

        }
    );
}