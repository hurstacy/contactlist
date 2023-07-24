
export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
      className="row-style" // Apply the CSS class to the row
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  