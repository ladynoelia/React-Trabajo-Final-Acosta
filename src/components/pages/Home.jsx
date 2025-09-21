import ItemListContainer from "../ItemListContainer";
import Carousel from "./home/Carousel";

function Home() {
  return (
    <>
      <div className="row main">
        {/* Columna Izquierda */}
        <div className="col-7">
          <div className="card h-100">
            <img
              src="./src/assets/images/products/welcome.png"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-start">
              <h3 className="card-title">Welcome</h3>
              <p className="card-text">¡Bienvenidos a FuwaFuwa Paradise!</p>
            </div>
          </div>
        </div>
        {/*  Columna derecha */}
        <div className="col-5">
          <div className="row lg-2">
            <div className="col-12">
              <Carousel
                collectionName={"Sekiguchi Pokemon"}
                imagen1={"./src/assets/images/products/pokemon/001-1.png"}
                imagen2={"./src/assets/images/products/pokemon/004-1.png"}
                imagen3={"./src/assets/images/products/pokemon/007-1.jpeg"}
              />
            </div>
            <div className="col-6">
              <Carousel
                collectionName={"Digimon Adventure: Stuffed Collection"}
                imagen1={"./src/assets/images/products/digimon/2001-1.jpg"}
                imagen2={"./src/assets/images/products/digimon/2002-1.jpg"}
                imagen3={"./src/assets/images/products/digimon/2009-1.jpg"}
              />
            </div>
            <div className="col-6">
              <Carousel
                collectionName={"Digimon Adventure: Plush"}
                imagen1={"./src/assets/images/products/digimon/2022-1.jpg"}
                imagen2={"./src/assets/images/products/digimon/2023-1.jpg"}
                imagen3={"./src/assets/images/products/digimon/2024-1.jpg"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <h1>¡Nuestros productos!</h1>
        <ItemListContainer />
      </div>
    </>
  );
}

export default Home;
