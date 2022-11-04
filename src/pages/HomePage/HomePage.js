// dependencies
import { Link, redirect } from "react-router-dom";

// scss
import styles from "./HomePage.module.scss";

// images
import cover from "../../assets/images/cafe1.jpg";
import cafe3 from "../../assets/images/cafe3.jpg";

function HomePage() {
  return (
    <div className={`${styles.homePage}`}>
      <section
        className={`${styles.presentation}`}
        style={{
          backgroundImage: `url( ${cover} )`,
          backgroundSize: "cover",
          filter: "contrast(200%)",
        }}
      >
        <h1 className="text-white">Toute l'expertise française dans un café</h1>
        <hr className="mb-40 w-80 mx-auto" />
        <p className="mx-auto">
          Projet créé dans le but de travailler la technologie React. Avant tout
          il s'agit d'un projet HTML/CSS de la plateforme Dyma.fr repris 100%
          par mes soins.
        </p>
        <div>
          <a
            className="btn btn-primary"
            target="_blank"
            href="https://cafe-florette-zyrass.netlify.app/"
            rel="noopener"
          >
            PROJECT BY DYMA
          </a>
          <Link to="/localisation" className="btn btn-primary-reverse">
            LOCALISATION
          </Link>
        </div>
      </section>

      <section className={`${styles.features} bg-white`}>
        <div>
          <i className="d-flex justify-content-center fas fa-coffee fa-3x"></i>
          <h2 className="my-20 upper d-flex justify-content-center">
            Un café par jour
          </h2>
          <p>
            Chez Café Florette, nous sommes les seuls au monde à concevoir un
            café unique par jour. Il y en a pour tous les goûts et l'avantage
            c'est que vous allez forcément vouloir en savoir plus sur le café dû
            moment. ainsi vous allez pouvoir partager autour d'un arôme
            différent et amélioré votre productivité... Nous en sommes certains
            !
          </p>
        </div>

        <div>
          <i className="d-flex justify-content-center fas fa-clock fa-3x"></i>
          <h2 className="my-20 upper d-flex justify-content-center ">
            Ouvert 24h/24 7j/7
          </h2>
          <p>
            Notre équipe est constamment disponible, ils nous arrivent de dormir
            c'est vrai mais pour nos clients, nous avons mis au point un
            calendrier en interne pour toutes nos équipes afin de pouvoir
            maintenir ce superbe café ouvert 24 heures sur 24 et surtout 7 jours
            sur 7 et il en va de même pour les jours février que ce soit le 1er
            mai ou bien à Noël ou le jour de l'an, nous sommes là et toujours là
            !!
          </p>
        </div>
      </section>

      <section
        className={`${styles.imgSeparated} w-100`}
        style={{
          backgroundImage: `url( ${cafe3} )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(70%)",
        }}
      ></section>

      <section className={`${styles.reservation} bg-white`}>
        <h2>Réservez dès maintenant</h2>
        <p className="w-80 my-70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          nesciunt odit dicta nihil exercitationem quod enim aut expedita
          molestias repellendus in vero ullam perferendis, temporibus dolorum
          necessitatibus corrupti delectus porro labore laboriosam veniam
          inventore velit est sed. Aut mollitia veniam laborum odio. Est vitae
          eius aperiam ipsa error. Adipisci, alias?
        </p>
        <Link to="/contact" className="btn btn-primary">
          RESERVEZ
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
