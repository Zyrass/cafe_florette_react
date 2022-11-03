function Alert({ typeAlert, ligne, name }) {
  return (
    <div
      className={`alert ${
        typeAlert === "normal"
          ? ""
          : typeAlert === "danger"
          ? "alert-danger"
          : typeAlert === "warning"
          ? "alert-warning"
          : typeAlert === "success"
          ? "alert-success"
          : typeAlert === "info"
          ? "alert-info"
          : ""
      } w-90 mx-auto mb-20`}
    >
      <p className="d-flex align-items-center justify-content-between w-100">
        <strong>
          <mark>Métro ligne n° {ligne}</mark>
        </strong>
        <span>{name}</span>
      </p>
    </div>
  );
}

export default Alert;
