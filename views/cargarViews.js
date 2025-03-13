import { productosapi } from "./services/api.js";

async function mostrarProducto(){
    try{
        let datos = await productosapi();
        console.log(datos);
        }catch(error){console.error("error:",error)}

}
mostrarProducto()

function todosLosProductos(ListaProductos){
    ListaProductos.foreach(Element => {
        console.log(Element);
    });
}

export{mostrarProducto}