import React from 'react';
import ProductCard from '../componentes/ProductCard'; // Importa la ProductCard
import '../css/Productos.css'; // O el archivo CSS correspondiente
import '../css/Header.css'; // Si es necesario para los estilos de la cabecera

const images = {
  calzado1: require('../imagenesProductos/tennis1.jpg'),
  calzado2: require('../imagenesProductos/tennis2.jpg'),
  calzado3: require('../imagenesProductos/tennis3.jpg'),
  // Añadir más imágenes si es necesario
};

const CalzadoDeportivo = () => {
  return (
    <main className="main-content">
      <header className="header">
        <div className="header-content">
          <h6 className="header-title">Calzado Deportivo</h6>
        </div>
      </header>

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
          {/* Puedes agregar más ProductCards si es necesario */}
        </div>
      </section>
    </main>
  );
};

export default CalzadoDeportivo;


