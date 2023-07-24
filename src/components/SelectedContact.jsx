import ContactRow from "./ContactRow";

import React, { useEffect, useState } from "react"; // Corrected the import

export default function SelectedContact({ selectedContactId, setSelectedContactId, goBack }) {
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      async function fetchContactData() {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchContactData();
    }, [selectedContactId]);
  
    if (!contact) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
        <table>
          <thead>
            <tr>
              <th className="selected-heading" colSpan="3">Selected Contact:</th>
            </tr>
          </thead>
          <tbody>
            {/* Render ContactRow with correct prop names */}
            <ContactRow setSelectedContactId={setSelectedContactId} contact={contact} />
          </tbody>
        </table>
  
        {/* Button to go back */}
        <button onClick={() => goBack()}>Go Back</button>
      </>
    );
  }
  