import isThisMonth from 'date-fns/isThisMonth';
import parseISO from 'date-fns/parseISO'

const cargarTotalGastado = () =>{
    const contenedorTotalGastado =document.getElementById('total-gastado');
  const gastos = JSON.parse(window.localStorage.getItem('gastosE'));
  let total = 0;
  
  if(gastos){
    //(gasto) por cada gasto ejecuta algp
   const gastosFilter= gastos.filter((gasto)=>{
    //Transformamos la cadena de texto en un objeto para que pueda ser utilizada por isThisMonth
    if(isThisMonth(parseISO(gasto.fecha))){
        return gasto;
    }
       
    });
       if(gastosFilter){
        //ideantificamos cada gasto como gastoFor y le decimos que sea el total mas el precio del gasto, asi se suman cada uno de los gastos
         //parseFloat lo pasa a numero la cadena de texto
        gastosFilter.forEach((gastoFor) => {
            total += parseFloat(gastoFor.precio);
         });
       }
       //Formateamos el nro  lo ponemos en el contenedor
       const fromatoMoneda = new Intl.NumberFormat('en-AR', {style:'currency', currency:'ARS'});
       contenedorTotalGastado.innerText = fromatoMoneda.format(total);
       
  }
};

export default cargarTotalGastado;