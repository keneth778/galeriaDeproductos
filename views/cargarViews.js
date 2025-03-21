import { productosapi } from "../services/api.js";

// Función para mostrar los productos en el DOM
async function mostrarProducto() {
    try {
        let datos = await productosapi();
        console.log(datos);

        // Obtener el contenedor principal (root)
        const contenedorRoot = document.getElementById("root");

        // Verificar si el contenedor root existe
        if (!contenedorRoot) {
            console.error("El contenedor 'root' no fue encontrado en el DOM.");
            return;
        }

        // Crear un contenedor para los productos
        const contenedorProductos = document.createElement("div");
        contenedorProductos.id = "productos-container"; // Asignar un ID opcional
        contenedorRoot.appendChild(contenedorProductos);

        // Crear y agregar cada producto al DOM
        datos.forEach(producto => {
            const productoElemento = crearProducto(producto);
            contenedorProductos.appendChild(productoElemento);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Función para crear un elemento de producto
function crearProducto(producto) {
    // Crear el contenedor del producto
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("producto");

    // Crear la imagen
    const img = document.createElement("img");
    img.src = producto.image; // Usar 'image' en lugar de 'img'
    img.alt = producto.title;

    // Crear el nombre del producto
    const nombre = document.createElement("h2");
    nombre.textContent = producto.title;

    // Crear el precio del producto
    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.price}`;

    // Crear la descripción del producto
    const descripcion = document.createElement("p");
    descripcion.textContent = producto.description;

    // Agregar los elementos al contenedor del producto
    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(nombre);
    contenedorProducto.appendChild(precio);
    contenedorProducto.appendChild(descripcion);

    return contenedorProducto;
}

export { mostrarProducto };