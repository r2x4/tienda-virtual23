import React from 'react';
import ProductCard from '../componentes/ProductCard';
import '../css/Productos.css';

const images = {
    bici: require('../imagenesProductos/bici1.jpg'),
    balon: require('../imagenesProductos/tennis1.jpg'),
    guantes: require('../imagenesProductos/tennis1.jpg')
};

const ArticulosDeportivos = () => {
    return (
        <main className="main-content">
            <header className="header">
                <div className="header-content">
                    <h6 className="header-title">Artículos Deportivos</h6>
                </div>
            </header>

            <section className="top-products">
                <h1 className="heading-1">Artículos más Vendidos</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.bici} 
                        title="Bicicleta de Montaña" 
                        price="$350,000" 
                        discount="15%" 
                    />
                    <ProductCard 
                        imgSrc={images.balon} 
                        title="Balón de Fútbol" 
                        price="$50,000" 
                        discount="10%" 
                    />
                    <ProductCard 
                        imgSrc={images.guantes} 
                        title="Guantes de Box" 
                        price="$40,000" 
                        discount="5%" 
                    />
                </div>
            </section>
        </main>
    );
};

export default ArticulosDeportivos;

