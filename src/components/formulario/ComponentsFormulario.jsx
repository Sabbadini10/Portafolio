import React from 'react'
import './Formulario.css'

function ComponentsFormulario() {
  return (
    <div>
        <h1 className="main-titulo d-flex justify-content-center mt-1">
    Contacto
  </h1>
  <div className="Contactos m-3 d-flex justify-content-center">
    <form class="contacto-formulario card m-3" action="/sendEmail" autoComplete='on' method="POST">
      <div class="mb-3">
        <label for="formularioName" class="form-label text-dark">
          Nombre
        </label>
        <input
          type="text"
          class="contacto-input form-control"
          id="formularioName"
          name='nombre'
          placeholder="Join Doin"
        />
      </div>
      <div class="mb-3">
        <label for="formularioEmail" class="form-label text-dark">
          Email
        </label>
        <input
          type="email"
          class="contacto-input form-control"
          id="formularioEmail"
          name='email'
          placeholder="JoinDoin@example.com"
        />
      </div>
      <div class="mb-3">
        <label
          for="formularioTextarea"
          class="form-label text-dark"
        >
          Mensaje
        </label>
        <textarea
          class="contacto-textarea form-control"
          id="formularioTextarea"
          name='mensaje'
          rows="3"
        ></textarea>
      </div>
      <div class="contactos-boton-contenedor col-auto d-flex justify-content-center">
        <button type="submit" class="contactos-boton btn btn-primary mb-2">
          Enviar
        </button>
      </div>
    </form>
  </div>
  </div>
  )
}


export default ComponentsFormulario;