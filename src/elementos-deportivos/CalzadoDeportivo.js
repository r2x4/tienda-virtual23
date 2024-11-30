import React from 'react';
import ProductCard from '../componentes/ProductCard';
<<<<<<< HEAD
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importa el Header común
=======
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importamos el Header común
>>>>>>> master
import '../css/Productos.css';
import '../css/elementos.css';

const images = {
<<<<<<< HEAD
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
=======
    calzado1: require('../ImagenesCalzadoDeportivo/tennis1.jpg'),
    calzado2: require('../ImagenesCalzadoDeportivo/tennis2.jpg'),
    calzado3: require('../ImagenesCalzadoDeportivo/tennis3.jpg'),
    calzado4: require('../ImagenesCalzadoDeportivo/TennisAdidas1.jpg'),
    calzado5: require('../ImagenesCalzadoDeportivo/TennisDama1.jpg')
};

const CalzadoDeportivo = () => {
    const products = [
        { id: "product-calzado1", imgSrc: images.calzado1, title: "Zapatilla New_Balance", price: "$120,000", discount: "5%" },
        { id: "product-calzado2", imgSrc: images.calzado2, title: "Zapatillas Nike", price: "$150,000", discount: "10%" },
        { id: "product-calzado3", imgSrc: images.calzado3, title: "Zapatillas Puma", price: "$410,000", discount: "8%" },
        { id: "product-calzado4", imgSrc: images.calzado4, title: "Zapatillas Adidas", price: "$310,000", discount: "20%" },
        { id: "product-calzado5", imgSrc: images.calzado5, title: "Tennis de Mujer", price: "$180,000", discount: "4%" }
    ];

    return (
        <main className="main-content">
            <HeaderElementos titulo="Calzado Deportivo" />
            <section className="top-products">
                <h1 className="heading-1">El Mejor Calzado Deportivo</h1>
                <div className="container-products">
                    {products.map((product) => {
                        console.log('Product ID:', product.id); // Depuración para ver el id
                        return (
                            <ProductCard
                                key={product.id}  // Clave única
                                id={product.id}
                                imgSrc={product.imgSrc}
                                title={product.title}
                                price={product.price}
                                discount={product.discount}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
>>>>>>> master
};

export default CalzadoDeportivo;





<<<<<<< HEAD
=======

>>>>>>> master
