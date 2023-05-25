
// ARRAY VACIO PARA PUSHEAR LOS ARTICULOS QUE SE COMPRAN AL CARRITO:
let carrito =[];

// LLAMO AL CONTENEDOR (ESPACIO) DONDE VOY A INSERTAR MIS PRODUCTOS (ARRAY DE OBEJTOS):
let contProductos = document.getElementById("misprods");

//INSERTO LOS PRODUCTOS CON UN BUCLE FOR OF DE MI ARRAY PRODUCTOS CON INNERHTML PEGANDO UNA ESTRUCTURA DE "CARD" DE BOOTSTRAP EDITANDO LOS DATOS CORRESPONDIENTES:

    for(producto of productos){
        contProductos.innerHTML += `
        <div class="card col sm-2">
            <img src=${producto.foto} class="card-img-top">
                <div class="card-body">
                    <h2 class="card-title-articulo">ARTICULO: ${producto.articulo}</h2>
                    <h2 class="card-title-codigo">CODIGO: ${producto.codigo}</h2>
                    <p class="card-text">DESCRIPCION: ${producto.descripcion}.</p>
                    <p class="card-text">COLORES EN STOCK: ${producto.colores}.</p>
                    <p class="card-text-precio">PRECIO: uds ${producto.precio}.</p>
                    <button id= 'btn${producto.id}' class="btn btn-warning">COMPRAR</button>
                </div>  
        </div>`
    } 

// RECORREMOS CON UN FOR EACH CADA PRODUCTO PARA ESCUCHAR EL EVENTO CON EL CLICK DEL BOTON COMPRAR, PARA ELLO USAMOS EL BOTON DINAMICO CON EL .ID:
productos.forEach((producto)=>{
    document.getElementById(`btn${producto.id}`).onclick = () => {agregarAlCarrito(producto)}
    
}) 

//CREAMOS LA FUNCION INDICADA EN EL FOR EACH DONDE PUSHEAMOS EL ARTICULO AL CARRITO, DAMOS AVISO CON ALERT e INSERTAMOS LA TABLA CON LA DESCRIPCION DEL PRODUCTO AGREGADO:
function agregarAlCarrito(productoAComprar){
carrito.push(productoAComprar);

//Sweetalert para notificar que se agregó al carrito:

Swal.fire({
    title: productoAComprar.articulo,
    text: 'Se ha cargado con éxito al carrito!',
    imageUrl: productoAComprar.foto,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Imagen del producto agregado al carro',
  })

document.getElementById("tablabody").innerHTML += `
<tr>
<td>${productoAComprar.articulo}</td>
<td>${productoAComprar.codigo}</td>
<td>${productoAComprar.precio}</td>
<td>
<input id= "boton${producto.id}" type="button" value="BORRAR"> 
</td>
</tr>
`
let totalCarrito = carrito.reduce((acumulador, prod) => acumulador+prod.precio, 0);
document.getElementById("total").innerText = `TOTAL A PAGAR: UDS ${totalCarrito}`;
}

let campoNombre = document.getElementById("nombre");
let campoApellido = document.getElementById("apellido");
let campoEdad = document.getElementById("edad");

campoNombre.oninput = () =>{
    if (isNaN(campoNombre.value)){
        campoNombre.style.color ="black"
    }else{campoNombre.style.color ="red"}
}
campoApellido.oninput = () =>{
    if (isNaN(campoNombre.value)){
        campoApellido.style.color ="black"
    }else{campoApellido.style.color ="red"}
}
campoEdad.oninput = () =>{
    if (isNaN(campoNombre.value)){
        campoApellido.style.color ="red"
    }else{campoApellido.style.color ="black"}
}

localStorage.setItem("usuario", "Gisela M. Tolomeo");
localStorage.setItem("dni", 34058293);
localStorage.setItem("train", true);

let usuario = localStorage.getItem("usuario");
let dni = parseInt(localStorage.getItem("dni"));
let train = localStorage.getItem("train") == "true";

console.log(usuario);
console.log(dni);
console.log(train);


















//VER!!! PARA BORRAR ARTICULO DEL CARRITO:
// let botonBorrar = document.getElementById(`boton${producto.id}`).addEventListener("click", function(){
//     console.log(botonBorrar);
// })
// console.log(botonBorrar);

// function borrarArticulo(productoAEliminar){
//     carrito.remove(productoAEliminar);
//     alert(`El producto "${productoAEliminar.articulo}" se ha eliminado carrito!`)
// }























