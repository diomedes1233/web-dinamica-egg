const form = document.getElementById('form')
const nombre = document.getElementById('nombre')
const parrafo = document.getElementById('alertas')


function validarFormulario() {
  let warnings = ''
  let valido = true
  parrafo.innerHTML = ''

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener mas de 4 caracteres!!`
    valido = false
  }

  if (valido) {
    parrafo.innerHTML = 'Enviado'
  } else {
    parrafo.innerHTML = warnings
  }

  return valido
}

form.addEventListener('submit', (e) => {
  if (validarFormulario()) {
    formulario.submit()
    //si la validación es exitosa puede enviar el formulario
  } else {
    e.preventDefault()
  }
})



// //alert("Hola este es mi javascript")
// /* let nombre = "Marta";
// nombre = "Carlos" */

// //var nombre1 = "Marta"

// const nombre2 = 'Esteban'
// //nombre2 = 'Carlos'

// //console.log(nombre)
// // console.log(nombre1)
// //console.log(nombre2)

// let contenidoTitulo = 'carlos'

// let titulo = document.querySelector('.corazon')
// titulo.innerHTML = contenidoTitulo

// //condicionales
// let textoTitulo = titulo.innerText
// console.log(textoTitulo)

// if (textoTitulo == 'Edwin') {
//   titulo.innerHTML = 'Juan'
// } else {
//   console.log('No se cumple')
// }

// //funciones1
// let parrafo1 = document.querySelector('.parrafo1')

// let frase

// function canbiarFrase(frase) {
//   canbiarFrase = `¡Bienvenido a mi página! Aquí, aprenderás más sobre mí ${frase}`
//   return canbiarFrase
// }

// parrafo1.innerText = canbiarFrase(' y mi familia.')

// //funciones2
// let ciudad = 'Ibague'
// let gusto = 'La Chuleta Balluna'

// let parrafo2 = document.querySelector('.parrafo2')

// function cambiarTexto(nombre, ciudad, gusto) {
//   let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en
//                         días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo
//                         que hacen.`
//   return contenido
// }

// parrafo2.innerText = cambiarTexto(nombre, ciudad, gusto)
