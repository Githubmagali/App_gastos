import { v4 as uuidv4 } from 'uuid';
import { cerrarFormularioGasto } from './eventoBtnFormularioGasto';
import cargarGastos from './cargarGastos';
import cargarTotalGastado from './cargarTotalGastado';


const formulario00 = document.querySelector('#formulario-gasto form'); //Div que contiene el form, que me busque el id de formulario gasto
const descripcion00 = formulario00.descripcionInput;
const precio00 = formulario00.precioInput;


const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;
const expRegPrecio =/^\d+(\.\d+)?$/;

const  comprobarDescripcion = ()=>{
  if(!expRegDescripcion.test(descripcion00.value)){
  descripcion00.classList.add('formulario-gasto__input--error'); //class de la descrpcion
  
  formulario00.descripcionInput.parentElement
  .querySelector('.formulario-gasto__leyenda') //Lina 91
  .classList.add('formulario-gasto__leyenda--active');
  return false;
}else{
  descripcion00.classList.remove('formulario-gasto__input--error');

  formulario00.descripcionInput.parentElement
  .querySelector('.formulario-gasto__leyenda')//<p></p>
  .classList.remove('formulario-gasto__leyenda--active');
  return true;
}
};

descripcion00.addEventListener('blur', (e)=>  comprobarDescripcion());
//keyup valida solo cuando tenemos un mensaje de error, evita que el usuario compruebe al escribir si tiene un error
descripcion00.addEventListener('keyup', (e)=>{
  if([...e.target.classList].includes('formulario-gasto__input--error')){ //target comprueba su lista de clases
  comprobarDescripcion();
  }
});

const comprobarPrecio = ()=>{
  if(!expRegPrecio.test(precio00.value)){
    precio00.classList.add('formulario-gasto__input--error');

    formulario00.precioInput.parentElement
    .querySelector('.formulario-gasto__leyenda')
    .classList.add('formulario-gasto__leyenda--active');
  return false;
  }else{
    precio00.classList.remove('formulario-gasto__input--error');
    formulario00.precioInput.parentElement
    .querySelector('.formulario-gasto__leyenda')
    .classList.remove('formulario-gasto__leyenda--active');
    return true;
  }
};

precio00.addEventListener('blur', (e)=> comprobarPrecio());
precio00.addEventListener('keyup', (e)=>{
  if([...e.target.classList].includes('formulario-gasto__input--error')){
    comprobarPrecio();
  }
});

formulario00.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(comprobarDescripcion() && comprobarPrecio()){
    const nuevoGasto ={
      id: uuidv4(),
      fecha: new Date(),
      descripcion: descripcion00.value,
      precio: precio00.value
   };

    //para que no pise el nuevo gasto al anterior creamos un nva variable
    const gastosGuardados = JSON.parse(window.localStorage.getItem('gastosE'));
    
    //comprobamos si hay gastos guardados
    if(gastosGuardados){
       const nuevosGastos = [...gastosGuardados, nuevoGasto];
       window.localStorage.setItem('gastosE', JSON.stringify(nuevosGastos));

    }else{
      //agregamos el primer gasto
       //En localStorage solo podemos guardar cadenas de texto, entonces necesitamos convertir el elemento en una cadena de texto con JSON stringfy
    //gastosE es el ID del primer div
    //[] las conviente en un arreglo ... busca nuevo gasto {} la convierte en objeto
    window.localStorage.setItem('gastosE', JSON.stringify([{...nuevoGasto}]));

    }
        //reiniciamos los valores al final de todo el proceso condicional de descripcion y precio
    descripcion00.value='';
    precio00.value='';

    cargarGastos();
    cerrarFormularioGasto();
    cargarTotalGastado();
  }
});
