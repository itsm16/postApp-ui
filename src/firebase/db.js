import { app } from "./firebase"; // Ensure the path is correct
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

/*
const add = async (data) => {
  try {
    const {username, email} = data;
    let doc = {
      username,
      email
      // Spread the data object to include all fields
      // time: new Date().toISOString() // Example: add a timestamp if needed
    };
    return await addDoc(collection(db, "todos"), doc);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
*/

const add = async (collectionName, data) => {
    try {
      return await addDoc(collection(db, collectionName), data);
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  };

export { add };
