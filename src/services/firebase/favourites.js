import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const querySnapshot = await getDocs(collection(db, "fav"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
