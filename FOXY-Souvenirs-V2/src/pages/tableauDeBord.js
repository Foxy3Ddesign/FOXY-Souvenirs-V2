import { creerAlbum } from "./album";
import { afficherMesAlbums } from "./mesAlbums";

export function afficherTableauDeBord(email, uid) {

    document.querySelector("#contenu").innerHTML = `

        <h2>Bienvenue !</h2>

        <p>Vous êtes connecté avec :</p>

        <strong>${email}</strong>

        <br><br>

        <button id="creerAlbum" class="btn">
            Créer un album
        </button>

        <br><br>

        <button id="mesAlbums" class="btn">
            Mes albums
        </button>

        <br><br>

        <button id="deconnexion" class="btn">
            Se déconnecter
        </button>

    `;

    // Bouton "Créer un album"
    document.querySelector("#creerAlbum").addEventListener("click", () => {

        document.querySelector("#contenu").innerHTML = `

            <h2>Créer un album</h2>

            <input
                id="nomAlbum"
                type="text"
                placeholder="Nom de l'évènement">

            <br><br>

            <input
                id="dateAlbum"
                type="date">

            <br><br>

            <textarea
                id="descriptionAlbum"
                placeholder="Description"></textarea>

            <br><br>

            <button id="enregistrerAlbum" class="btn">
                Enregistrer
            </button>

            <br><br>

            <button id="retourAlbums" class="btn">
                Retour à mes albums
            </button>

        `;

        document.querySelector("#enregistrerAlbum").addEventListener("click", async () => {

            const nom = document.querySelector("#nomAlbum").value;
            const date = document.querySelector("#dateAlbum").value;
            const description = document.querySelector("#descriptionAlbum").value;

            await creerAlbum(
                nom,
                date,
                description,
                uid
            );

            // Après la création, on revient automatiquement à la liste
            await afficherMesAlbums(uid);

        });

        document.querySelector("#retourAlbums").addEventListener("click", async () => {

            await afficherMesAlbums(uid);

        });

    });

    // Bouton "Mes albums"
    document.querySelector("#mesAlbums").addEventListener("click", async () => {

        await afficherMesAlbums(uid);

    });

}