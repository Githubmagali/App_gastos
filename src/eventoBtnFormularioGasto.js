
const boton00 = document.getElementById('toggle-form-gasto'); //linea 115
const formularioGasto = document.getElementById('formulario-gasto');

//Le indico que quiero recibir el modo pero en caso de no recibir ningun parametro quierp que le pasen 'agregarGasto'
const abrirFormularioGasto = (modo = 'agregarGasto') =>{
  boton00.classList.add('agregar-gasto__btn--active');
  formularioGasto.classList.add('formulario-gasto--active');

  //comprobamos ese modo con un condicional y le cambio el texto
  if(modo === 'editarGasto0'){
    document.querySelector('.formulario-gasto__titulo').innerText = 'Editar gasto'; //accedo primero al id del formulario pero no es obligatorio
  }
};

const cerrarFormularioGasto = () =>{
    boton00.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active');
  }
//... =arreglo includes=incluye, con estas dos propiedades consultas si el formulario tiene un arreglo
boton00.addEventListener('click', (e) =>{
    if([...formularioGasto.classList].includes('formulario-gasto--active')){ //Si ... el arreglo formularioGasto tiene activo(.includes) el id formulario-gasto--active
        cerrarFormularioGasto();
    }else{
      //como no tiene ningun parametro va a establecer la variable modo y por defecto 'agregarGasto'
        abrirFormularioGasto();
    }
    });

    export { cerrarFormularioGasto, abrirFormularioGasto};