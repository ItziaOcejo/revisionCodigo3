// Tenemos un li de productos
// U porque getElementById devuelve un único elemento, mientras que getElementsByName devuelve una lista de elementos y el ID es único en el DOM.
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

/* const li = document.getElementsByName("lista-de-productos") */
const listaDeProductos = document.getElementById("lista-de-productos"); // use document.getElementById("lista-de-productos") porque el ID es único en el DOM
const inputFiltro = document.querySelector("input[type='text']"); //seleccione correctamente el imput
/*
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
} 
*/

function displayProductos(productos) {
  // Limpiar la lista de productos
  listaDeProductos.innerHTML = ''; 
  // Crear y agregar los elementos de productos al DOM
  productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    productoDiv.appendChild(titulo);
    productoDiv.appendChild(imagen);
    listaDeProductos.appendChild(productoDiv); // Corrección: Agregar el producto al contenedor de productos
  });
}
/*
displayProductos(productos)
const botonDeFiltro = document.querySelector("button"); 
Lo eliminamos para llamar correctamente al displayProductos*/

displayProductos(productos);

const botonDeFiltro = document.querySelector("button"); 

botonDeFiltro.onclick = function() { 
  
  const texto = inputFiltro.value.toLowerCase(); //convertimos el texto a minusculas
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados); //Así mostramos los productos filtraods
}

  /*
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  } 

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  } */

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  