import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler=(id)=>{
        props.getID(id);
    }
    
    const renderContactList=props.contacts.map((contact)=>{
        console.log({contact});
        return(
       <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>

        );
    })
    return (
        <div className="ui called list">{renderContactList}</div>
    )
}

export default ContactList
