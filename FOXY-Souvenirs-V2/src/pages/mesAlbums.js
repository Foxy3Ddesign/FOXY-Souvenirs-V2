import { afficherGestionAlbum } from "./gestionAlbum";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function afficherMesAlbums(uid) {

    document.querySelector("#contenu").innerHTML = `
        <h2>Mes albums</h2>

        <div id="listeAlbums">
            Chargement...
        </div>
    `;

    const liste = document.querySelector("#listeAlbums");

    liste.innerHTML = "";

    const requete = query(
        collection(db, "albums"),
        where("proprietaire", "==", uid)
    );

    const snapshot = await getDocs(requete);

    snapshot.forEach((doc) => {

        const album = {
            id: doc.id,
            ...doc.data()
        };

        liste.innerHTML += `
            <div class="album">

                <h3>${album.nom}</h3>

                <p>${album.date}</p>

                <p>${album.description}</p>

                <br>

                <button class="ouvrirAlbum" data-id="${album.id}">
                    Ouvrir
                </button>

                <hr>

            </div>
        `;

    });

    // Les boutons existent maintenant, on peut leur ajouter un événement
    document.querySelectorAll(".ouvrirAlbum").forEach((bouton) => {

        bouton.addEventListener("click", () => {

            afficherGestionAlbum(bouton.dataset.id);

        });

    });

}