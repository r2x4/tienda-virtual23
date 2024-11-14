import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importa el Header común
import '../css/Productos.css';
import '../css/elementos.css';  // Estilos generales

const images = {
    sudadera: require('../imagenesProductos/bici1.jpg'),
    pantalon: require('../imagenesProductos/tennis1.jpg'),
    camiseta: require('../imagenesProductos/tennis1.jpg')
};

const PrendasDeportivas = () => {
    return (
        <main>
            {/* Usamos el componente HeaderElementos */}
            <HeaderElementos titulo="Prendas Deportivas" />

            <section className="top-products">
                <h1 className="heading-1">Prendas Deportivas</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.sudadera} 
                        title="Sudadera Adidas" 
                        price="$120,000" 
                    />
                    <ProductCard 
                        imgSrc={images.pantalon} 
                        title="Pantalón Deportivo" 
                        price="$100,000" 
                    />
                    <ProductCard 
                        imgSrc={images.camiseta} 
                        title="Camiseta Nike" 
                        price="$80,000" 
                    />
                </div>
            </section>
        </main>
    );
};

export default PrendasDeportivas;


