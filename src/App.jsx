import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
          goBack={handleGoBack}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
