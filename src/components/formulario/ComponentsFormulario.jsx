import React from 'react'
import './Formulario.css'

function ComponentsFormulario() {
  return (
    <div>
        <h1 className="main-titulo d-flex justify-content-center mt-1">
    Contacto
  </h1>
  <div className="Contactos m-3 d-flex justify-content-center">
    <form class="contacto-formulario card m-3" method="POST" action="mailto:matiassabbadini24@gmail.com?subject=CONTACTO ENTREVISTA" enctype ="text/plain" >
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label text-dark">
          Nombre
        </label>
        <input
          type="email"
          class="contacto-input form-control"
          id="exampleFormControlInput"
          placeholder="Join Doin"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label text-dark">
          Email
        </label>
        <input
          type="email"
          class="contacto-input form-control"
          id="exampleFormControlInput1"
          placeholder="JoinDoin@example.com"
        />
      </div>
      <div class="mb-3">
        <label
          for="exampleFormControlTextarea1"
          class="form-label text-dark"
        >
          Mensaje
        </label>
        <textarea
          class="contacto-textarea form-control"
          id="exampleFormControlTextarea1"
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