// dependencies
import Alert from "./Alert/Alert";

// scss
import styles from "./LocalisationPage.module.scss";

// image café-2
import imgLocalisation from "../../assets/images/cafe2.png";

function LocalisationPage() {
  return (
    <div className={styles.localisation}>
      <h1>Localisation</h1>
      <section className={styles.plan}>
        <img
          className={styles.img}
          style={{
            backgroundSize: "cover",
          }}
          src={imgLocalisation}
          alt="localisation du restaurent"
        />
      </section>

      <section>
        <h2 className={styles.h2}>Où nous trouver</h2>
        <hr className="w-60 mx-auto my-30" />

        <Alert
          key="3145321-1564832183"
          typeAlert="normal"
          ligne={4}
          name="Odéon"
        />
        <Alert
          key="4565891-1235981255"
          typeAlert="normal"
          ligne={11}
          name="Mabillon"
        />

        <address className={styles.adresse}>
          <strong>Adresse:</strong>
          <mark>131 Boulevard Saint-Germain, 75006 Paris</mark>
        </address>
      </section>
    </div>
  );
}

export default LocalisationPage;
