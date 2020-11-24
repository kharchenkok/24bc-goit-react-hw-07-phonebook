import React, { useEffect } from "react";
import { useDispatch} from "react-redux";

import {
  getContactsOperation,
} from "../../redux/operations/contactsOperations";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import Layout from "../layout/Layout";

// ===================================================================

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, []);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
};

export default Phonebook;
