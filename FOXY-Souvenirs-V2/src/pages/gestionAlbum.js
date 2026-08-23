export function afficherGestionAlbum(albumId) {

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

}