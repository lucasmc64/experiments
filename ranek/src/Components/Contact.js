import React from "react";

import Head from "./Head";

import imgContact from "../img/contato.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Head title="Ranek | Contato" />
      <img src={imgContact} alt="Contato" />
      <section>
        <h2>Entre em contato.</h2>
        <ul>
          <li>lucas@gmail.com</li>
          <li>38 9 9910-9898</li>
          <li>Rua Logo Ali</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
