import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../../Models/contacto.class'


    const ContactoComponent = ({ contacto }) =>{
        return (
            <div>
                <h3>Nombre: { contacto.nombre } 
                </h3>
                <h3>Apellido: {contacto.apellido } 
                </h3>
                <h3>email: { contacto.email } 
                </h3>
                <h3>¿Está conectado? {contacto.estaConectado ? "Contacto en linea" : "Desconectado"} 
                </h3>
            </div>
        );
    
}
ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;
