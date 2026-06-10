import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function testPosts() {
  try {
    const snapshot = await getDocs(collection(db, "posts"));

    console.log("📦 Posts fetched:");

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });

  } catch (err) {
    console.error("Firestore error:", err.message);
  }
}

testPosts();
