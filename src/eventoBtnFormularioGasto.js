
const boton00 = document.getElementById('toggle-form-gasto'); //linea 115
const formularioGasto = document.getElementById('formulario-gasto');


const abrirFormularioGasto = () =>{
  boton00.classList.add('agregar-gasto__btn--active');
  formularioGasto.classList.add('formulario-gasto--active');
}

const cerrarFormularioGasto = () =>{
    boton00.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active');
  }
//... =arreglo includes=incluye, con estas dos propiedades consultas si el formulario tiene un arreglo
boton00.addEventListener('click', (e) =>{
    if([...formularioGasto.classList].includes('formulario-gasto--active')){ //Si ... el arreglo formularioGasto tiene activo(.includes) el id formulario-gasto--active
        cerrarFormularioGasto();
    }else{
        abrirFormularioGasto();
    }
    });

    export { cerrarFormularioGasto, abrirFormularioGasto};