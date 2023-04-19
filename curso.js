let carrito =[];
let contProductos = document.getElementById("misprods");

function renderizarProductos () {
    for(producto of productos){
        contProductos.innerHTML += `
        
        <div class="card col sm-2">
            <img src=${producto.foto} class="card-img-top">
                <div class="card-body">
                    <h2 class="card-title-articulo">ARTICULO: ${producto.articulo}</h2>
                    <h2 class="card-title-codigo">CODIGO: ${producto.codigo}</h2>
                    <p class="card-text">DESCRIPCION: ${producto.descripcion}.</p>
                    <p class="card-text">COLORES EN STOCK: ${producto.colores}.</p>
                    <p class="card-text-precio">PRECIO: ${producto.precio}.</p>
                    <button id= 'btn${producto.id}' class="btn btn-warning">COMPRAR</button>
                </div>  
        </div> 
        `
    }

productos.forEach((producto)=>{
    document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
        agregarAlCarrito(producto)
    })
})  
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
carrito.push(productoAComprar);
alert(`El producto "${productoAComprar.articulo}" se ha agregado al carrito con éxito!`)
document.getElementById("tablabody").innerHTML += `
<tr>
<td>${productoAComprar.articulo}</td>
<td>${productoAComprar.codigo}</td>
<td>${productoAComprar.precio}</td>
</tr>
`
let totalCarrito = carrito.reduce((acumulador, prod) => acumulador+prod.precio, 0);
document.getElementById("total").innerText = `Total a pagar: $${totalCarrito}`;
}

