import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importa el Header común
import '../css/Productos.css';
import '../css/elementos.css';  // Estilos generales

const images = {
<<<<<<< HEAD
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
=======
    sudadera: require('../ImagenesRopaDeportiva/Buzo1.jpg'),
    pantalon: require('../ImagenesRopaDeportiva/Buzo2.jpg'),
    camiseta: require('../ImagenesRopaDeportiva/Pantaloneta1.jpg')
};

const PrendasDeportivas = () => {
    const products = [
        { id: "product-sudadera", imgSrc: images.sudadera, title: "Sudadera Adidas", price: "$120,000" },
        { id: "product-pantalon", imgSrc: images.pantalon, title: "Pantalón Deportivo", price: "$100,000" },
        { id: "product-camiseta", imgSrc: images.camiseta, title: "Camiseta Nike", price: "$80,000" }
    ];

    return (
        <main>
            <HeaderElementos titulo="Prendas Deportivas" />
            <section className="top-products">
                <h1 className="heading-1">Prendas Deportivas</h1>
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
                            />
                        );
                    })}
>>>>>>> master
                </div>
            </section>
        </main>
    );
};

export default PrendasDeportivas;


<<<<<<< HEAD
=======

>>>>>>> master
