import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);
  let collectionRef = projectFirestore.collection(collection).orderBy("createdAt");

  const unsub = collectionRef.onSnapshot((snap) => {
    let results = [];
    snap.forEach((doc) => {
      doc.data().createdAt &&
        results.push({
          id: doc.id,
          ...doc.data(),
        });
    });
    documents.value = results;
    error.value = null;
  }, (err) => {
    console.log(err.message);
    error.value = "Couldn't fetch the data";
    documents.value = null;
  });

  watchEffect((onInvalidate) => {
      onInvalidate(() => unsub());
  })

    return { documents, error };
};

export default getCollection;
