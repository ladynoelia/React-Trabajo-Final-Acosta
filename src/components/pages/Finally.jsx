const Finally = ({ orderId, onClose }) => {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title">🎉 ¡Gracias por tu compra! 🎉</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Tu pedido fue procesado con éxito.</p>
            <p>
              <strong>ID de la orden:</strong> <br /> {orderId}
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-fin" onClick={onClose}>
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finally;
