import { fbApp } from "./FirebaseConfig";

 const firestore = fbApp.firestore();


const createDocument = (collection, document) => {
  return firestore.collection(collection).add(document);
}

const createDocumentWithUId = (collection, uid, info) =>{
  return firestore.collection(collection).doc(uid).update({
   info
  })
}

const readDocuments = (collection) => {
  return firestore.collection(collection).get()
}

const updateDocument = (collection, id, property) => {
  return firestore.collection(collection).doc(id).update(property)
}
const FbFirestoreService = {
  createDocument,
  readDocuments,
  createDocumentWithUId,
  updateDocument,
}

export default FbFirestoreService;