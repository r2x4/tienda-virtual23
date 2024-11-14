import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importamos el Header común
import '../css/Productos.css';
import '../css/elementos.css';

const images = {
    proteina: require('../imagenesProductos/ropaDeportiva.jpg'),
    aminoacidos: require('../imagenesProductos/ropaDeportiva.jpg'),
    creatina: require('../imagenesProductos/ropaDeportiva.jpg')
};

const SuplementosDeportivos = () => {
    return (
        <main className="main-content">
            {/* Usamos el HeaderElementos con el título correspondiente */}
            <HeaderElementos titulo="Suplementos Deportivos" />

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




