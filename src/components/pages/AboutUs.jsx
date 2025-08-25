import { useState, useEffect } from "react";

function AboutUs() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetch("./src/components/db/aboutUs.json")
      .then((res) => res.json())
      .then((data) => setOwners(data))
      .catch((err) => console.error("Error cargando información:", err));
  }, []);

  return (
    <>
      <div>
        <h1>Bienvenidos a FuwaFuwaParadise</h1>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {owners.map((owner) => (
            <div key={owner.id} className="p-4 border rounded">
              <img
                src={owner.pictureUrl}
                className="card-img-top"
                alt={owner.title}
              />
              <h2>{owner.title}</h2>
              <p>{owner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
