import React from 'react';
import ProductCard from '../componentes/ProductCard';
import HeaderElementos from '../elementos-deportivos/HeaderElementos';  // Importamos el Header común
import '../css/Productos.css';
import '../css/elementos.css';

const images = {
    proteina: require('../ImagenesSuplementosDeportivos/Proteina_Whey.jpg'),
    aminoacidos: require('../ImagenesSuplementosDeportivos/Aminoacidos.jpg'),
    creatina: require('../ImagenesSuplementosDeportivos/Creatina.jpg')
};

const SuplementosDeportivos = () => {
    const products = [
        { id: "product-proteina", imgSrc: images.proteina, title: "Proteína Whey", price: "$90,000", discount: "10%" },
        { id: "product-aminoacido", imgSrc: images.aminoacidos, title: "Aminoácidos", price: "$60,000", discount: "5%" },
        { id: "product-creatina", imgSrc: images.creatina, title: "Creatina", price: "$50,000", discount: "8%" }
    ];

    return (
        <main>
            <HeaderElementos titulo="Suplementos Deportivos" />
            <section className="top-products">
                <h1 className="heading-1">Suplementos Deportivos</h1>
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
};

export default SuplementosDeportivos;





