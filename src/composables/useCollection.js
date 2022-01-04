import { ref } from "vue";
import {projectFirestore } from "../firebase/config";

const userCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Coudn't send a message";
    }
  }
  return { error, addDoc };
};

export default userCollection;
