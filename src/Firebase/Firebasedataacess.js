// useFirestoreCollection.js
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase'; // adjust path as needed

function useFirestoreCollection(collectionName) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(documents);
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError(err);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, error };
}

export default useFirestoreCollection;