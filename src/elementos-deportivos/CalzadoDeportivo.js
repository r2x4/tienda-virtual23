import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importa el Header común
import '../css/Productos.css';
import '../css/elementos.css';

const images = {
  calzado1: require('../imagenesProductos/tennis1.jpg'),
  calzado2: require('../imagenesProductos/tennis2.jpg'),
  calzado3: require('../imagenesProductos/tennis3.jpg'),
};

const CalzadoDeportivo = () => {
  return (
    <main className="main-content">
      {/* Usamos el HeaderElementos con el título correspondiente */}
      <HeaderElementos titulo="Calzado Deportivo" />

      <section className="top-products">
        <h1 className="heading-1">Nuestros Calzados Más Vendidos</h1>
        <div className="container-products">
          <ProductCard
            imgSrc={images.calzado1}
            title="Tennis Running"
            price="$120,000"
            discount="5%"
          />
          <ProductCard
            imgSrc={images.calzado2}
            title="Tennis de Fútbol"
            price="$150,000"
            discount="10%"
          />
          <ProductCard
            imgSrc={images.calzado3}
            title="Zapatillas de Entrenamiento"
            price="$110,000"
            discount="8%"
          />
        </div>
      </section>
    </main>
  );
};

export default CalzadoDeportivo;





