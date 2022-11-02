import styles from "./Contact.module.scss";

function ContactPage() {
  return (
    <div className="container mt-40 px-40 pb-40 bg-white">
      <h1 className={`upper pt-40 my-40 ${styles.h1}`}>Contactez-nous</h1>
      <h2>Vous avez une question ou une remarque ?</h2>
      <section className="py-40 px-40">
        <div className="d-flex flex-column mb-20">
          <span className="mb-5">Nom</span>
          <input 
            type="text" placeholder="Veuillez saisir votre nom ici..." 
            className="py-5 px-15"
          />
        </div>
        <div className="d-flex flex-column mb-20">
          <span className="mb-5">Email</span>
          <input
            type="email"
            placeholder="Veuillez saisir votre e-mail ici..."
            className="py-5 px-15"
          />
        </div>
        <div className="d-flex flex-column mb-20">
          <span className="mb-5">Votre message</span>
          <textarea
            type="textarea"
            placeholder="Veuillez saisir votre message ici. Il peut s'agir d'une question ou bien d'une remarque."
            className="py-20 px-15"
          />
        </div>
        <hr className="my-50 w-50 mx-auto" />
        <div className="d-flex justify-content-center">
          <button type="button" className="upper btn btn-primary">Soumettre</button>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
