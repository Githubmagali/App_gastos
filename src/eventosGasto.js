import { abrirFormularioGasto } from "./eventoBtnFormularioGasto";

const contenedorGastos = document.getElementById('gastosE');
contenedorGastos.addEventListener('click', (e)=>{
 const gasto = e.target.closest('.gasto');

 if(gasto){
    if(gasto.scrollLeft > 0){
    gasto.querySelector('.gasto__info').scrollIntoView({
        behavior: 'smooth',
        inline:'start',
        block:'nearest',
    });
    }else{
        gasto.querySelector('.gasto__acciones').scrollIntoView({
            behavior: 'smooth',
            inline:'start',
            block:'nearest',

    });
 }
}


//editar gasto
if(e.target.closest('[data-accion="editar-gasto"]')){
    //dataset.id obtiene el id del gasto
const id = gasto.dataset.id;

//Obtenemos los gastos guardados
//JSON.parse para que los transforme en un objeto de javascript
const gastosGuardados= JSON.parse(window.localStorage.getItem('gastosE'));


//cada vez que el usuario presione el boton de editar aparezca las vaiables vacias para que pueda completar
let precio =''; 
let descripcion = '';

//comprobamos si hay gastos guardados
if(gastosGuardados && gastosGuardados.length > 0){
    //identificamos cada elemento como gastoFor
    gastosGuardados.forEach((gastoFor) => {
        if(gastoFor.id === id){
           precio= gastoFor.precio;
           descripcion = gastoFor.descripcion;
                }
    });
  //Le ponemos el id de la descripcion y el precio a los inputs del formulario
  document.querySelector('#formulario-desc #descripcionInput').value = descripcion;
  document.querySelector('#formulario-desc #precioInput').value = precio;
  //para hacerle un atributo personalizado
  document.querySelector('#formulario-desc').dataset.id = id;

  //Le pasamos el parametro que es una cadena de text 'editarGasto' que lo recibo de eventoBtnFormularioGasto.js en la funcion abrirFormularioGasto 
  abrirFormularioGasto('editarGasto0');
}
}
});

const contenedorBoton = document.getElementById('formulario-gasto');
contenedorBoton.addEventListener('click', (e)=>{
    const bot = e.target.closest('.formulario-gasto__form');

    if(bot){
        if(bot.scrollLeft >0){
            bot.querySelector('.descripcionyPrecio').scrollIntoView({
                behavior: 'smooth',
                inline:'start',
                block:'nearest',
            });
        }else{
             bot.querySelector('.btn').scrollIntoView({
                    behavior: 'smooth',
                    inline:'start',
                    block:'nearest',
                });
        }
    }
});
