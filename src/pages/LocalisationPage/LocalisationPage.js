import styles from "./LocalisationPage.module.scss";
import imgLocalisation from "../../assets/images/cafe2.png";

function LocalisationPage() {
  return (
    <div className={`bg-white ${styles.localisation}`}>
      <h1 className={`upper ${styles.h1}`}>Localisation</h1>
      <section className={`${styles.plan}`}>
        <img
          className={styles.img}
          style={{
            backgroundSize: "cover",
          }}
          src={imgLocalisation}
          alt="localisation du restaurent"
        />
      </section>

      <section className="adresse">
        <h2 className={styles.h2}>Où nous trouver</h2>
        <hr className="w-60 mx-auto my-30" />

        <div className="alert w-90 mx-auto mb-20">
          <p className="d-flex align-items-center justify-content-between w-100">
            <strong>
            <mark>Métro ligne 4</mark>
            </strong>
            <span>Odéon</span>
          </p>
        </div>

        <div className="alert w-90 mx-auto mb-20">
          <p className="d-flex align-items-center justify-content-between w-100">
            <strong>
            <mark>Métro ligne 11</mark>
            </strong>
            <span>Mabillon</span>
          </p>
        </div>

        <address className={styles.adresse}>
          <strong>Adresse:</strong>
          <mark>131 Boulevard Saint-Germain, 75006 Paris</mark>
        </address>
      </section>
    </div>
  );
}

export default LocalisationPage;
