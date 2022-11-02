import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

import cover from "../../assets/images/cafe1.jpg";
import cafe3 from "../../assets/images/cafe3.jpg";

function HomePage() {
  return (
    <div className={`${styles.home}`}>
      <section
        className={`${styles.presentation}`}
        style={{
          backgroundImage: `url( ${cover} )`,
          filter: "contrast(160%)",
        }}
      >
        <h1 className="pt-80 w-70 upper">
          Toute l'expertise française dans un café
        </h1>
        <hr className="my-100 w-80 mx-auto" />
        <p className="w-60 mx-auto pb-100">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quasi eaque fuga, voluptate magni voluptatum nihil quis deleniti
          dicta, soluta voluptatibus est assumenda in quisquam dolores ?
        </p>
        <Link to="/localisation" class="btn btn-primary">
          DECOUVRIR
        </Link>
      </section>

      <section className={`${styles.features} bg-white`}>
        <div className="mr-50">
          <i className="d-flex justify-content-center fas fa-coffee fa-3x"></i>
          <h2 className="my-20 upper d-flex justify-content-center">
            Un nouveau café par jour
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut ullamcorper quam. Maecenas vitae purus id diam tempor
            pellentesque vel ac ex. Phasellus molestie, odio quis pharetra
            convallis, nibh ex cursus justo, vel hendrerit nibh metus non
            libero. Proin tincidunt felis ut ligula luctus, sit amet malesuada
            purus tincidunt. Suspendisse dapibus bibendum velit, a volutpat nunc
            tincidunt ut. Aenean blandit erat eu molestie sodales. Sed ornare
            fringilla purus, id fermentum ipsum sagittis nec.
          </p>
        </div>

        <div className="ml-50">
          <i class="d-flex justify-content-center fas fa-clock fa-3x"></i>
          <h2 className="my-20 upper d-flex justify-content-center ">
            Ouvert 24h/24 7j/7
          </h2>
          <p>
            Fusce tincidunt odio at elementum vehicula. Aenean aliquet mollis
            massa ac commodo. Phasellus pellentesque augue vulputate, vehicula
            odio ac, ullamcorper est. Praesent scelerisque tincidunt vehicula.
            In eget mollis nisi, non feugiat ipsum. Ut pellentesque est vitae
            velit tristique, vel posuere dui fringilla. Vestibulum ac lacus quis
            tellus luctus bibendum a ut sapien. Ut vulputate justo ante. Donec
            consectetur lectus nunc, sit amet convallis sapien pretium eu.
            Mauris quis fringilla justo.
          </p>
        </div>
      </section>

      <section
        className={`${styles.imgSeparated}`}
        style={{
          backgroundImage: `url( ${cafe3} )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(70%)",
        }}
      ></section>

      <section className={`${styles.reservation} bg-white`}>
        <h2>Réservez dès maintenant</h2>
        <p className="w-50 my-70">
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
