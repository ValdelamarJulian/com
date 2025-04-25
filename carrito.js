const carrito = [];
const carritoBarra = document.getElementById('carrito-barra');
const abrirCarrito = document.getElementById('abrir-carrito');
const cerrarBarra = document.getElementById('cerrar-barra');
const contadorCarrito = document.getElementById('contador-carrito');
const carritoLista = document.getElementById('carrito-lista-barra');
const totalCarrito = document.getElementById('total-carrito-barra');

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
  carritoLista.innerHTML = '';
  let total = 0;
  
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoLista.appendChild(li);
    total += parseFloat(producto.precio);
  });

  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
  contadorCarrito.textContent = carrito.length;
}

// Abrir barra lateral
abrirCarrito.addEventListener('click', () => {
  carritoBarra.classList.add('open');
});

// Cerrar barra lateral
cerrarBarra.addEventListener('click', () => {
  carritoBarra.classList.remove('open');
});

// Agregar productos al carrito desde los botones
document.querySelectorAll('.agregar-carrito').forEach((button) => {
  button.addEventListener('click', (event) => {
    const producto = event.target.closest('.producto');
    const nombre = producto.getAttribute('data-nombre');
    const precio = producto.getAttribute('data-precio');
    agregarAlCarrito({ nombre, precio });
  });
});
