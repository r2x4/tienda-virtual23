import React from 'react';
import ProductCard from '../componentes/ProductCard';
import '../css/Productos.css';

const PrendasDeportivas = () => {
    return (
        <main>
            <section className="top-products">
                <h1 className="heading-1">Prendas Deportivas</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={require('../imagenesProductos/ropaDeportiva.jpg')} 
                        title="Sudadera Adidas" 
                        price="$120,000" 
                    />
                    <ProductCard 
                        imgSrc={require('../imagenesProductos/ropaDeportiva.jpg')} 
                        title="Pantalón Deportivo" 
                        price="$100,000" 
                    />
                    <ProductCard 
                        imgSrc={require('../imagenesProductos/ropaDeportiva.jpg')} 
                        title="Camiseta Nike" 
                        price="$80,000" 
                    />
                </div>
            </section>
        </main>
    );
};

export default PrendasDeportivas;
