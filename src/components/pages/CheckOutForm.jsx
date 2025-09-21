import { useState, useContext } from "react";
import { CartContext } from "/src/context/cartContext";
import { saveCart } from "../../services/products";
import { serverTimestamp } from "firebase/firestore";
import Finally from "./Finally";

const CheckOutForm = () => {
  const { cartList, deleteAllItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    direccion: "",
    telefono: "",
    localidad: "",
    cp: "",
    mensaje: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const total = cartList.reduce(
    (acumulado, item) => acumulado + item.price * item.qty,
    0
  );

  const order = {
    buyer: formData,
    items: cartList,
    total,
    date: serverTimestamp(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.nombre != "" &&
      formData.mail != "" &&
      formData.direccion != "" &&
      formData.telefono != "" &&
      formData.localidad != "" &&
      formData.cp != ""
    ) {
      try {
        const id = await saveCart(order);
        setOrderId(id);
        deleteAllItems();
        console.log("Pedido guardado:", order);
      } catch (error) {
        console.error("Error al guardar el pedido:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setOrderId(null);
    window.location.href = "/";
  };

  return (
    <>
      <div className="row main form">
        <form className="col-8" onSubmit={handleSubmit}>
          <h1>Completá con tus datos</h1>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre y apellido:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              className="form-control"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row mb-3 w-100 form-w">
            <div className="col-6">
              <label htmlFor="direccion" className="form-label">
                Dirección:
              </label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                className="form-control"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="telefono" className="form-label">
                Número de teléfono:
              </label>
              <input
                type="tel"
                name="telefono"
                id="telefono"
                className="form-control"
                value={formData.telefono}
                onChange={handleChange}
                pattern="^\+?[0-9]{7,15}$"
                required
              />
            </div>
          </div>
          <div className="row mb-3 w-100 form-w">
            <div className="col-8">
              <label htmlFor="localidad" className="form-label">
                Localidad:
              </label>
              <input
                type="text"
                name="localidad"
                id="localidad"
                className="form-control"
                value={formData.localidad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-4">
              <label htmlFor="cp" className="form-label">
                CP:
              </label>
              <input
                type="text"
                name="cp"
                id="cp"
                className="form-control"
                value={formData.cp}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje:
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              className="form-control"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-fin">
            Finalizar compra
          </button>
        </form>

        <div className="card card-resume col-4">
          <h2>Resumen de la compra</h2>
          <h6>Subtotal: ${total}</h6>
          <h6>Envio: $8000</h6>
          <h6>Descuentos: $2000</h6>
          <h3>Total a abonar: ${total + 8000 - 2000}</h3>
        </div>

        {orderId && <Finally orderId={orderId} onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default CheckOutForm;
