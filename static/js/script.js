function mostrarTareas(mes) {
  const tareas = {
    septiembre: [
      { texto: 'HTML - CSS - JS -> VIDEO', url: '/static/proyectos/P1Video4-2/video.html' },
      { texto: 'HTML - CSS - JS -> AUDIO', url: '/static/proyectos/P2Audio4-2/audio.html' },
    ],
    octubre: [
      { texto: 'HTML - CSS - JS -> MULTIPLES IMÁGENES', url: 'https://placehold.co/600x400?text=Ejercicio: Multiples imágenes' },
      { texto: 'HTML - CSS - JS -> COMBINACIÓN DE OBJETOS', url: 'https://placehold.co/600x400?text=Ejercicio: Combinación de objetos' },
    ],
    noviembre: [
      { texto: 'HTML - CSS - JS -> RESPONSIVOS', url: 'https://placehold.co/600x400?text=Ejercicios: Responsivos' },
      { texto: 'HTML - CSS - JS -> ANIMACIONES', url: 'https://placehold.co/600x400?text=Ejercicios: Animaciones' },
    ],
  }

  const lista = document.getElementById("lista-tareas")
  lista.innerHTML = ''
  lista.classList.add("oculto")

  tareas[mes].forEach(tarea => {
    const li = document.createElement("li")
    li.innerHTML = `<a href="${tarea.url}" target="_blank">${tarea.texto}</a>`
    lista.appendChild(li)
  })

  lista.classList.remove("oculto")
}

function ocultarLista(){
  const lista = document.getElementById("lista-tareas")
  lista.classList.add("oculto")
  lista.innerHTML = ""
}

function mostrarMensaje() {
  const comentario = document.getElementById('comentario').value

  if(comentario.trim() === ""){
    alert('No has ingresado ningún texto')
    return
  }

  alert(`Has enviado el comentario "${comentario}" al servidor.`)
  document.getElementById('comentario').value = ""
}