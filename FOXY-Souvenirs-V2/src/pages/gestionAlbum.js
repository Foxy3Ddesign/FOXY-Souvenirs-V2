import { afficherThemes } from "./themes";

import { db } from "../firebase/firebase";

import {
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";


export async function afficherGestionAlbum(albumId) {

    document.querySelector("#contenu").innerHTML = `

        <h2>Gestion de l'album</h2>

        <p>
            Album :
            <strong>${albumId}</strong>
        </p>

        <hr>

        <button id="infosAlbum" class="btn">
            Informations
        </button>

        <br><br>

        <button id="themesAlbum" class="btn">
            Thèmes
        </button>

        <br><br>

        <button id="photosInvites" class="btn">
            Photos des invités
        </button>

        <br><br>

        <button id="parametresAlbum" class="btn">
            Paramètres
        </button>

        <br><br>

        <button id="retourAlbums" class="btn">
            Retour
        </button>

    `;


    // Bouton Informations

    document.querySelector("#infosAlbum").addEventListener(
        "click",
        async () => {

            const albumRef = doc(
                db,
                "albums",
                albumId
            );

            const albumSnapshot = await getDoc(albumRef);

            if (!albumSnapshot.exists()) {

                alert("Album introuvable.");

                return;

            }

            const album = albumSnapshot.data();


            document.querySelector("#contenu").innerHTML = `

                <h2>Informations de l'album</h2>

                <br>

                <label>
                    Nom de l'évènement
                </label>

                <br>

                <input
                    id="nomAlbum"
                    type="text"
                    value="${album.nom || ""}"
                >

                <br><br>


                <label>
                    Date
                </label>

                <br>

                <input
                    id="dateAlbum"
                    type="date"
                    value="${album.date || ""}"
                >

                <br><br>


                <label>
                    Description
                </label>

                <br>

                <textarea
                    id="descriptionAlbum"
                >${album.description || ""}</textarea>

                <br><br>


                <label>
                    Message de bienvenue
                </label>

                <br>

                <textarea
                    id="messageBienvenue"
                    placeholder="Bienvenue dans notre album souvenir..."
                >${album.messageBienvenue || ""}</textarea>

                <br><br>

                <button id="enregistrerInfos" class="btn">
                    Enregistrer les modifications
                </button>

                <br><br>

                <button id="retourGestion" class="btn">
                    Retour
                </button>

            `;


            // Enregistrer les modifications

            document.querySelector("#enregistrerInfos").addEventListener(
                "click",
                async () => {

                    const nom = document.querySelector("#nomAlbum").value;

                    const date = document.querySelector("#dateAlbum").value;

                    const description =
                        document.querySelector("#descriptionAlbum").value;

                    const messageBienvenue =
                        document.querySelector("#messageBienvenue").value;


                    await updateDoc(albumRef, {

                        nom: nom,

                        date: date,

                        description: description,

                        messageBienvenue: messageBienvenue

                    });


                    alert("Les informations ont été enregistrées.");

                }
            );


            // Retour à la gestion de l'album

            document.querySelector("#retourGestion").addEventListener(
                "click",
                () => {

                    afficherGestionAlbum(albumId);

                }
            );

        }
    );


    // Bouton Thèmes

    document.querySelector("#themesAlbum").addEventListener(
        "click",
        () => {

            afficherThemes(albumId);

        }
    );

}