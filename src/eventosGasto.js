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
console.log(gastosGuardados);
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
