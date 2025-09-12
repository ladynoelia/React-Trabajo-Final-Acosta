import { getDocs, collection, getDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
/* import products from "../components/db/mock.json"; */

const getItems = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const querySnapshot = await getDocs(collection(db, "items"));

  const products = querySnapshot.docs.map((elem) => {
    return {
      id: elem.id,
      ...elem.data(),
    };
  });

  return products;
};

const getItemById = async (id) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const file = doc(db, "items", id);
  const query = await getDoc(file);
  if (query.exists()) {
    return {
      id: query.id,
      ...query.data(),
    };
  } else {
    return null;
  }
};

/* const uploadItems = async () => {
  try {
    const productsCol = collection(db, "items");

    for (const product of products) {
      await addDoc(productsCol, product);
      console.log(`✅ Producto subido: ${product.title}`);
    }

    console.log("🚀 Todos los productos fueron subidos a Firestore.");
  } catch (error) {
    console.error("❌ Error subiendo productos:", error);
  }
}; */

export { getItems, getItemById };

/*   const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const resp = await fetch("./src/components/db/mock.json");
        const data = await resp.json();
        resolve(data);
      }, 2000);
    });
  }; */
