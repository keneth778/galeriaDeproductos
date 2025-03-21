// producto.js
// Función para crear un elemento de producto
function crearProducto(producto) {
    // Crear el contenedor del producto
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("producto");

    // Crear la imagen
    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;

    // Crear el nombre del producto
    const nombre = document.createElement("h2");
    nombre.textContent = producto.nombre;

    // Crear el precio del producto
    const precio = document.createElement("p");
    precio.textContent = producto.precio;

    // Crear la descripción del producto
    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    // Agregar los elementos al contenedor del producto
    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(nombre);
    contenedorProducto.appendChild(precio);
    contenedorProducto.appendChild(descripcion);

    return contenedorProducto;
}

// Función para agregar todos los productos al DOM
function agregarProductos() {
    const contenedorPrincipal = document.getElementById("productos-container");

    productos.forEach(producto => {
        const productoElemento = crearProducto(producto);
        contenedorPrincipal.appendChild(productoElemento);
    });
}

// Llamar a la función para agregar los productos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", agregarProductos);