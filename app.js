let carrito = [];
let parentDiv = document.getElementById('stock-productos');
let contenedorCarrito = document.getElementById('contenedor-carrito');
let precioTotal = document.getElementById('precio-total');
let contador = document.getElementById('display-contador-carrito');
let ventanaModal = document.getElementById('ventana-modal');

//funcionalidad menu //
document.getElementById('abrir-carrito').addEventListener('click', () => {
  if(carrito.length == 0){
    alert('El Carrito Esta Vacio');
  } else {
    ventanaModal.style.display = 'flex';
  }
  });
document.getElementById('cerrar-carrito').addEventListener('click', () => {
  ventanaModal.style.display = 'none';
});
document.getElementById('vaciar-carrito').addEventListener('click', () => {
  if(carrito.length == 0){
    alert('el carrito esta vacio');
  } else {
    carrito.length = 0;
    alert('vaciando carrito');
    actualizarCarrito();
  }
});
document.getElementById('cerrar-ventana-modal').addEventListener('click', () =>{
    ventanaModal.style.display = 'none';
});
document.getElementById('comprar-ventana-modal').addEventListener('click', () => {
    alert('Compra Realizada Con Exito');
    location.reload();
});


//primer paso renderizado
allProductos.forEach((producto) => {
    const childDiv = document.createElement('div');
    childDiv.className = 'container-car';
    childDiv.innerHTML = `
    <span class="hijos" id="titulo-hijo">${producto.nombre}</span>
    <img class="hijos" id="imagen-hijo" src="${producto.img}" />
    <span class="hijos" id="descripcion-hijo">${producto.caracteristicas}</span>
    <span class="hijos" id="precio-hijo">${producto.precio}</span>
    <button id="agregar-hijo-${producto.id}" onClick="agregarCarrito(${producto.id})" class="btn-crear">Comprar</button>
    `;
    parentDiv.appendChild(childDiv);
});

//segundo paso agregar producto
function agregarCarrito (prodId){
    let item = allProductos.find((elemento) => elemento.id === prodId) 
     carrito.push(item);
    alert('Producto Agregado');
     actualizarCarrito();
    }


 function actualizarCarrito (){
        contenedorCarrito.innerHTML ='';
        precioTotal.innerHTML = 0;
        contador.innerHTML = 0;
        carrito.forEach((prod)=>{
         
        let div = document.createElement('div');
        div.className = ('hijo-carrito');
        div.innerHTML = `
        <p class="item-car" >${prod.nombre}</p>
        <img class="item-car" src="${prod.img}" id="img-item-car"  />
        <p class="item-car">${prod.caracteristicas}</p>
        <p class="item-car">${prod.precio}</p>
        <button onClick="eliminaItem(${prod.id})" class="item-car">Eliminar</button> `;
          
       
        
        contenedorCarrito.appendChild(div);
     
        contador.innerHTML = carrito.length;
        precioTotal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0);
      
      });
    }
  
    function eliminaItem(prodId){
      let item = carrito.find((prod) => prod.id === prodId);
      let index = carrito.indexOf(item);
      carrito.splice(index, 1);
       actualizarCarrito();
   } 


