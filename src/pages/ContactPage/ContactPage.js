function ContactPage() {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <h2>Vous avez une question ou une remarque ?</h2>
      <section>
        <div>
          <span>Nom</span>
          <input type="text" placeholder="Veuillez saisir votre nom ici..." />
        </div>
        <div>
          <span>Email</span>
          <input
            type="email"
            placeholder="Veuillez saisir votre e-mail ici..."
          />
        </div>
        <div>
          <span>Votre message</span>
          <textarea
            type="textarea"
            placeholder="Veuillez saisir votre message ici. Il peut s'agir d'une question ou bien d'une remarque."
          />
        </div>
        <div>
          <button type="button">Soumettre</button>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
