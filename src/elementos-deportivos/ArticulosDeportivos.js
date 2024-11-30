import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importamos el Header común
import '../css/Productos.css';
import '../css/elementos.css';

const images = {
    bici: require('../imagenesProductos/bici1.jpg'),
<<<<<<< HEAD
    balon: require('../imagenesProductos/tennis1.jpg'),
    guantes: require('../imagenesProductos/tennis1.jpg')
};

const ArticulosDeportivos = () => {
    return (
        <main className="main-content">
            {/* Usamos el HeaderElementos con el título correspondiente */}
            <HeaderElementos titulo="Artículos Deportivos" />

            <section className="top-products">
                <h1 className="heading-1">Artículos más Vendidos</h1>
                <div className="container-products">
                    <ProductCard 
                        id="bici1" // Agregado id único para cada producto
                        imgSrc={images.bici} 
                        title="Bicicleta de Montaña" 
                        price="$350,000" 
                        discount="15%" 
                    />
                    <ProductCard 
                        id="balon1" // Agregado id único
                        imgSrc={images.balon} 
                        title="Balón de Fútbol" 
                        price="$50,000" 
                        discount="10%" 
                    />
                    <ProductCard 
                        id="guantes1" // Agregado id único
                        imgSrc={images.guantes} 
                        title="Guantes de Box" 
                        price="$40,000" 
                        discount="5%" 
                    />
=======
    balonFutbol: require('../ImagenesImplementosDeportivos/Balon_Futbol.jpg'),
    balonBaloncesto: require('../ImagenesImplementosDeportivos/Balon_Baloncesto.jpg'),
    peraBoxeo: require('../ImagenesImplementosDeportivos/Pera_Boxeo.jpg'),
    sacoBoxeo: require('../ImagenesImplementosDeportivos/Saco_Boxeo.jpg')
};

const ArticulosDeportivos = () => {
    const products = [
        { id: "product-bici", imgSrc: images.bici, title: "Bicicleta de Montaña", price: "$650,000", discount: "15%" },
        { id: "product-balonFutbol", imgSrc: images.balonFutbol, title: "Balón de Fútbol", price: "$150,000", discount: "10%" },
        { id: "product-balonBaloncesto", imgSrc: images.balonBaloncesto, title: "Balón de Baloncesto", price: "$140,000", discount: "5%" },
        { id: "product-peraBoxeo", imgSrc: images.peraBoxeo, title: "Pera de Boxeo", price: "$120,000", discount: "5%" },
        { id: "product-sacoBoxeo", imgSrc: images.sacoBoxeo, title: "Saco de Boxeo", price: "$180,000", discount: "5%" }
    ];

    return (
        <main className="main-content">
            <HeaderElementos titulo="Implementos Deportivos" />
            <section className="top-products">
                <h1 className="heading-1">Encontraras los mejores implementos deportivos</h1>
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
>>>>>>> master
                </div>
            </section>
        </main>
    );
};

export default ArticulosDeportivos;





<<<<<<< HEAD
=======

>>>>>>> master
