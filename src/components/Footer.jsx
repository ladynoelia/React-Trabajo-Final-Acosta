const Footer = () => {
  return (
    <>
      <div className="footer main">
        <div className="nav-footer">
          <ul>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Cambios y devoluciones</a>
            </li>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Botón de arrepentimiento</a>
            </li>
          </ul>
        </div>
        <div className="info-inf">
          <p className="info-inf-izq">
            FuwaFuwa Paradise © 2025 Todos los derechos reservados
          </p>
          <div className="contacto">
            <ul>
              <li>
                <img
                  src="src/assets/images/icons/direccion.png"
                  alt="icono direccion"
                />
                Azul, Buenos Aires, Argentina
              </li>
              <li>
                <img
                  src="src/assets/images/icons/telefono.png"
                  alt="icono telefono"
                />
                +549 2281 xx xxxx
              </li>
              <li>
                <img src="src/assets/images/icons/mail.png" alt="icono mail" />
                info.fuwa@asdf.com.ar
              </li>
            </ul>
          </div>
          <div className="info-inf-der">
            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src="src/assets/images/social/facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src="src/assets/images/social/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://x.com/?lang=es&mx=2" target="_blank">
                  <img src="src/assets/images/social/x.png" alt="X" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
