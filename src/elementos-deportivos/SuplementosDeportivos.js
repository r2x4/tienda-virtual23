import React from 'react';
import ProductCard from '../componentes/ProductCard';
import '../css/Productos.css';

const images = {
    proteina: require('../imagenesProductos/ropaDeportiva.jpg'),  // Cambia la imagen por la correcta
    aminoacidos: require('../imagenesProductos/ropaDeportiva.jpg'),  // Cambia la imagen por la correcta
    creatina: require('../imagenesProductos/ropaDeportiva.jpg')  // Cambia la imagen por la correcta
};

const SuplementosDeportivos = () => {
    return (
        <main className="main-content">
            <header className="header">
                <div className="header-content">
                    <h6 className="header-title">Suplementos Deportivos</h6>
                </div>
            </header>

            <section className="top-products">
                <h1 className="heading-1">Suplementos más Vendidos</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.proteina} 
                        title="Proteína Whey" 
                        price="$90,000" 
                        discount="10%" 
                    />
                    <ProductCard 
                        imgSrc={images.aminoacidos} 
                        title="Aminoácidos" 
                        price="$60,000" 
                        discount="5%" 
                    />
                    <ProductCard 
                        imgSrc={images.creatina} 
                        title="Creatina" 
                        price="$50,000" 
                        discount="8%" 
                    />
                </div>
            </section>
        </main>
    );
};

export default SuplementosDeportivos;

