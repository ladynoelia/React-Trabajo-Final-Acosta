import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import products from "../components/db/mock.json";

const uploadItems = async () => {
  try {
    const productsCol = collection(db, "items");

    for (const product of products) {
      await addDoc(productsCol, product);
      console.log(`Producto subido: ${product.title}`);
    }

    console.log("Todos los productos fueron subidos a Firestore.");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};

export default uploadItems;

/*   const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const resp = await fetch("./src/components/db/mock.json");
        const data = await resp.json();
        resolve(data);
      }, 2000);
    });
  }; */
