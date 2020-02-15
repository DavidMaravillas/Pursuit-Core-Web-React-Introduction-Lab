import React from 'react';
import Contacts from "./contact/contacts"
import "../../css/contact.css"

const ContactList =({contacts})=>{
    contacts = contacts.map(contact =>{
        return <Contacts name={contact.name} position={contact.position} statement={contact.statement} key={contact.name}/>
    })
    return(
        <div id="contactList">
            <h3>Contacts</h3>
            {contacts}
        </div>
    )
}


export default ContactList;