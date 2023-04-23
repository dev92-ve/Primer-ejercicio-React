import React from 'react';
import { Contacto } from '../../Models/contacto.class';
import ContactoComponent from "../Pure/contacto"


        const ContactoListComponent = () => {
            
            const contactoDefault = new Contacto("José", "Moreno", "jose@gmail.com", false)

            return (
            <div>
                <ContactoComponent contacto={contactoDefault} ></ContactoComponent>
            </div>
        );
    }

export default ContactoListComponent;
