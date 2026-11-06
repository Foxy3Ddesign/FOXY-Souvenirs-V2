
import "./css/main.css";

const lienAlbum =
    "https://guestalbum.so/a/les-50-ans-d-anne?ref=link";

document.querySelector("#app").innerHTML = `
    <section class="hero">
        <div class="hero-content">

            <h1 class="bienvenue">
                Bienvenue aux 50 ans d'Anne
            </h1>

            <div class="actions-album">

                <a
                    class="btn"
                    href="${lienAlbum}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Découvrir l'album
                </a>

                <a
                    class="btn btn-secondaire"
                    href="${lienAlbum}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ajouter mes photos
                </a>

            </div>

        </div>
    </section>
`;
