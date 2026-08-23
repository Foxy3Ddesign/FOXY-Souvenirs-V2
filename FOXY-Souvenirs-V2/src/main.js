import "./css/main.css";
import { creerCompte, connexion } from "./pages/inscription";

document.querySelector("#app").innerHTML = `
<section class="hero">
    <div class="hero-content">

        <h1>Les Plus Beaux Souvenirs</h1>

        <p>Bienvenue aux 50 ans d'Anne</p>

        <div id="contenu">

            <button id="btnInscription" class="btn">
                Créer un compte
            </button>

        </div>

    </div>
</section>
`;

const bouton = document.querySelector("#btnInscription");

bouton.addEventListener("click", () => {

    document.querySelector("#contenu").innerHTML = `
        <h2>Créer un compte</h2>

        <input
            type="email"
            id="email"
            placeholder="Votre adresse e-mail">

        <br><br>

        <input
            type="password"
            id="password"
            placeholder="Votre mot de passe">

        <br><br>

        <button id="valider" class="btn">
            Créer mon compte
        </button>

        <br><br>

        <button id="connexion" class="btn">
            Se connecter
        </button>
    `;

    document.querySelector("#valider").addEventListener("click", async () => {

        const email = document.querySelector("#email").value;
        const motDePasse = document.querySelector("#password").value;

        await creerCompte(email, motDePasse);

    });

    document.querySelector("#connexion").addEventListener("click", async () => {

        const email = document.querySelector("#email").value;
        const motDePasse = document.querySelector("#password").value;

        await connexion(email, motDePasse);

    });

});