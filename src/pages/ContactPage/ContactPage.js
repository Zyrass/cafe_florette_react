import styles from "./Contact.module.scss";

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1>Contactez-nous</h1>
      <h2>Vous avez une question ou une remarque ?</h2>
      <section>
        <div>
          <label>Nom :</label>
          <input type="text" placeholder="Veuillez saisir votre nom ici..." />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Veuillez saisir votre e-mail ici..."
          />
        </div>
        <div>
          <label>Votre message :</label>
          <textarea
            type="textarea"
            placeholder="Veuillez saisir votre message ici. Il peut s'agir d'une question ou bien d'une remarque."
            className="py-20 px-15"
          />
        </div>
        <hr className="my-50 w-50 mx-auto" />
        <div className={styles.sectionBTN}>
          <button
            type="button"
            className="upper btn btn-primary w-50 "
            disabled
          >
            Soumettre
          </button>
          <em className="text-muted">
            Il est donc inutile de l'utiliser ou de modifier son attribut{" "}
            <strong>disabled</strong>.<br />
            Le formulaire n'est pas câblé et donc il ne fera strictement rien.
          </em>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
