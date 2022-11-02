import styles from "./LocalisationPage.module.scss";
import imgLocalisation from "../../assets/images/cafe2.png";

function LocalisationPage() {
  return (
    <div className={`container-fluid bg-white ${styles.localisation}`}>
      <h1
        className={`upper py-50 px-100 d-flex justify-content-center ${styles.h1}`}
      >
        Localisation
      </h1>
      <section className={`${styles.plan} py-0 px-25`}>
        <img
          className={styles.img}
          src={imgLocalisation}
          alt="localisation du restaurent"
        />
      </section>
      <section className="py-0 adresse">
        <h2 className={styles.h2}>Où nous trouver</h2>
        <hr className="w-70 mx-auto my-30" />

        <div className="alert">
          <p className="d-flex justify-content-between w-100">
            <strong className="w-30">
              Métro ligne <mark>4</mark>
            </strong>
            <span>Odéon</span>
          </p>
        </div>
        <div className="alert mt-20 mb-70">
          <p className="d-flex justify-content-between w-100">
            <strong className="w-30">
              Métro ligne <mark>11</mark>
            </strong>
            <span>Mabillon</span>
          </p>
        </div>

        <address className="d-flex justify-content-between mr-70">
          <strong>Adresse:</strong>
          <mark>131 Boulevard Saint-Germain, 75006 Paris</mark>
        </address>
      </section>
    </div>
  );
}

export default LocalisationPage;
