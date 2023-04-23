export class Contacto  {
  
    nombre = "";
    apellido = "";
    email = "";
    estaConectado = false;

    constructor (nombre, apellido, email, estaConectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estaConectado = estaConectado;
    }

}


