import React, {useEffect} from 'react';
import { getClientDetails, getClientSelected} from '../../actions/clientActions';
import { getContacts} from '../../actions/contactsActions';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';


function Clientedetalhado({id, client, contact, getClientDetails, getContacts}) {
   
  useEffect(()=>{
    getClientDetails(id)     
 },[id, getClientDetails])

 

useEffect(()=>{
  getContacts(id)
},[])

  return(
    <Container id="contehome1">
      <Image
        id="header"
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
      { client.map(cl => {   
          return <div className="cliente" key={cl.clientIdClient}>
           { <span>Contatos do Cliente  {cl.fullName}
           
           </span>}           
      </div>}) }
    { contact.map(C => {   
          return <div className="contato" key={C.idContact+C.clientIdClient}>
           { <span>Nome do contato: {C.fullName}
           <br /> E-mail principal: {C.email1}
           <br /> E-mail secundário: {C.email2}
           <br /> Telefone principal: {C.phone1}
           <br /> Telefone secundário: {C.phone2}
           </span>}           
      </div>}) }

      { client.map(d => {   
          return <div className="cliente" key={d.clientIdClient}>
           { <Link to={'/registrocontato/'+ d.idClient}>
           <p> Quer adicionar um contato? </p>
                </Link>}           
      </div>}) }
      
      </Container>
  );
}

function mapStateToProps(state){
    return{
        client : state.usuario.client,
        contact : state.usuario.contacts
        
    }
  }  
  export default connect (mapStateToProps,{getClientDetails, getContacts})( Clientedetalhado )
  