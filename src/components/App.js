
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import ContactCard from "./ContactCard";
import ContactList from "./ContactList"
import AddContact from "./AddContact";
import { uuid } from "uuidv4";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactDetails from './ContactDetails';
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // const contacts=[{
  //   id:"1", name:"chandu",Email:"cjekd@gail.com",
  // },{
  //   id:"2", "name":"raj","Email":"raj@gail.com",
  // }];
  const [contacts, setContacts] = useState([]);

  function contactHandler(contact) {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contact);


  }
  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
    console.log("delete");
  }
  // useEffect(() => {
  //   const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrieve) setContacts(retrieve);
  // }, []);
  // useEffect(() => {
  //   console.log("useeffecr");
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify( ));

  // }, [contacts]);


  return (
    <div className="ui container" >
      <Router> 
      hello world
      <Header />
      <Switch>
      <Route path="/add" exact 
      render={(props)=>(
      <AddContact
       {...props}
        contactHandler={contactHandler}/>)}
        />
      <Route path="/" exact
      render={(props)=>(
        <ContactList
        {...props}
        contacts={contacts}
        getID={removeContact}/>)}
      />
      <Route path="/contact/:id" component={ContactDetails }/>
      </Switch> 
      {/* <AddContact contactHandler={contactHandler} />
      <ContactList contacts={contacts} getID={removeContact} /> */}
      </Router>

    </div>
  );
}

export default App;
