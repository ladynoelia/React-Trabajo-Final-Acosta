import {
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

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

const getItemsByField = async (field, operator, value) => {
  try {
    const productsCol = collection(db, "items");
    const q = query(productsCol, where(field, operator, value));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error consultando productos:", error);
    return [];
  }
};

const saveCart = async (order) => {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
};

export { getItems, getItemById, getItemsByField, saveCart };
