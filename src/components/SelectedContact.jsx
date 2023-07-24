import {useEffect} from 'react';
import { useState } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
      async function setSelectedContactId() {
        try {
          const response = await fetch(
            "http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
          );
          const result = await response.json();
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      }
      setSelectedContactId();
    }, []);
    return (
      <table>
        <thead>
            
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </tbody>
      </table>
    );
  }
  