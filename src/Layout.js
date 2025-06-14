import React, { createContext, useContext } from 'react';
import useFirestoreCollection from './Firebase/Firebasedataacess';

const GlobalDataContext = createContext();

export function GlobalDataProvider({ children }) {
  const { data: Details } = useFirestoreCollection("Details");
  const { data: Experience } = useFirestoreCollection("Experience");
  const { data: Education } = useFirestoreCollection("Education");
  const { data: Skills } = useFirestoreCollection("Skills");
  const { data: Language } = useFirestoreCollection("Language");

  const { data: Certifications, error: Certificationsserror } = useFirestoreCollection("Certifications");
  const { data: Projects, error: Projectssserror } = useFirestoreCollection("Projects");
  const { data: Connect, error: Connecterror } = useFirestoreCollection("Connect");
  
 const { data: Workshops, error: Workshopserror } = useFirestoreCollection("Workshops");


const { data: About, error: Abouterror } = useFirestoreCollection("About");


  return (
    <GlobalDataContext.Provider value={{
      Details,
      Experience,
      Education,
      Skills,
      Language,
      Certifications,
      Projects,
      Connect,
      Workshops,
      About,
      
    }}>
      {children}
    </GlobalDataContext.Provider>
  );
}

// Custom hook to use anywhere
export function useGlobalData() {
  return useContext(GlobalDataContext);
}
