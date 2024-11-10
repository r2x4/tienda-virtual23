import React from 'react';
import ProductCard from './ProductCard';
import BlogCard from './BlogCard';
import '../css/Productos.css';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPersonBiking, faPen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Objeto que contiene las imágenes
const images = {
    fondo2: require('../imagenes/Fondo2.jpg'), 
    tennis1: require('../imagenesProductos/tennis1.jpg'), 
    ropaDeportiva: require('../imagenesProductos/ropaDeportiva.jpg'),
    implementosDeportivos: require('../imagenesProductos/ropaDeportiva.jpg'), 
    bicicletas: require('../imagenesProductos/ropaDeportiva.jpg'),
    logo: require('../imagenes/logo.jpg'),
    adidasNegra: require('../imagenesProductos/ropaDeportiva.jpg'),
    sudaderaAdidas: require('../imagenesProductos/ropaDeportiva.jpg'),
    pantaloneta: require('../imagenesProductos/ropaDeportiva.jpg')
};

const Productos = () => {
    return (
        <main id="top" className="main-content"> 
            <header className="header">
                <div className="header-content">
                    <FontAwesomeIcon icon={faPersonBiking} className="logo" />
                    <h6 className="header-title">Numero 1<br />Sport Five</h6>
                    <nav className="nav-links">
                        <a href="/crear-cuenta">Crea tu Cuenta</a>
                        <a href="/carrito"><FontAwesomeIcon icon={faCartShopping} /></a>
                        <div className="dropdown">
                            <button className="dropbtn">Categoría</button>
                            <div className="dropdown-content">
                                <a href="/calzado-deportivo">Calzado Deportivo</a>
                                <a href="/prendas-deportivas">Prendas Deportivas</a>
                                <a href="/suplementos-deportivos">Suplementos Deportivos</a>
                                <a href="/articulos-deportivos">Artículos Deportivos</a>
                            </div>
                        </div>
                        <a href="/ofertas">Ofertas</a>
                        <div className="search-write">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                            <input type="text" placeholder="Buscar productos..." />
                            <FontAwesomeIcon icon={faPen} className="icon" />
                        </div>
                    </nav>
                </div>
            </header>

            <section className="top-products">
                <h1 className="heading-1">Productos más Vendidos</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.tennis1} 
                        title="Calzado Deportivo" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.ropaDeportiva} 
                        title="Ropa Deportiva" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.implementosDeportivos} 
                        title="Implementos Deportivos" 
                        noCartIcon={true} 
                    />
                    <ProductCard 
                        imgSrc={images.bicicletas} 
                        title="Bicicletas" 
                        noCartIcon={true}   
                    />
                </div>
            </section>

            <section className="gallery">
                <h1 className="heading-1">Galería de Productos</h1>
                <div className="gallery-images">
                    <img src={images.fondo2} alt="Zapatos Deportivos" className="gallery-img" />
                    <img src={images.tennis1} alt="Tennis" className="gallery-img" />
                    <img src={images.ropaDeportiva} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.adidasNegra} alt="Zapatos Deportivos" className="gallery-img" />
                    <img src={images.sudaderaAdidas} alt="Tennis" className="gallery-img" />
                    <img src={images.pantaloneta} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.fondo2} alt="Zapatos Deportivos" className="gallery-img" />
                    <img src={images.tennis1} alt="Tennis" className="gallery-img" />
                    <img src={images.ropaDeportiva} alt="Ropa Deportiva" className="gallery-img" />
                    <img src={images.adidasNegra} alt="Zapatos Deportivos" className="gallery-img" />
                    <img src={images.sudaderaAdidas} alt="Tennis" className="gallery-img" />
                    <img src={images.pantaloneta} alt="Ropa Deportiva" className="gallery-img" />
                </div>
            </section>

            <section className="container specials">
                <h1 className="heading-1">Llegados Recientemente</h1>
                <div className="container-products">
                    <ProductCard 
                        imgSrc={images.sudaderaAdidas} 
                        title="Sudadera Adidas" 
                        price="$120,000" 
                        discount="-3%" 
                    />
                    <ProductCard 
                        imgSrc={images.tennis1} 
                        title="Calzado Running" 
                        price="$280,000" 
                        discount="-5%" 
                    />
                    <ProductCard 
                        imgSrc={images.fondo2} 
                        title="Balon FPC" 
                        price="$100,000" 
                        discount="-3%" 
                    />
                    <ProductCard 
                        imgSrc={images.adidasNegra} 
                        title="Tennis Adidas" 
                        price="$50,000" 
                        discount="-5%" 
                    />
                    <ProductCard 
                        imgSrc={images.pantaloneta} 
                        title="Balon FPC" 
                        price="$120,000" 
                        discount="-3%" 
                    />
                </div>
            </section>

            <section className="container blogs">
                <h1 className="heading-1">Últimos Blogs</h1>
                <div className="container-blogs">
                    <BlogCard 
                        imgSrc={images.fondo2} 
                        title="Aditamentos Deportivos" 
                        date="29 Enero 2024" 
                        description="Son objetos, prendas y accesorios que requiere una persona para practicar o desarrollar actividades físicas de tipo deportivo..." 
                    />
                    <BlogCard 
                        imgSrc={images.tennis1} 
                        title="Calzado Deportivo" 
                        date="7 Noviembre 2023" 
                        description="El calzado deportivo sirve para proteger el pie de roces y abrasiones, ejercer un efecto amortiguador entre éste y el suelo..." 
                    />
                    <BlogCard 
                        imgSrc={images.ropaDeportiva} 
                        title="Ropa Deportiva" 
                        date="23 Julio 2021" 
                        description="La ropa deportiva debe de ser capaz de reducir gran parte del impacto generado al realizar una actividad física..." 
                    />
                </div>
            </section>

            <footer className="footer">
                <section className="footer-links">
                    <a href="#top">Ir al inicio</a> 
                    <a href="mailto:rrs230780@gmail.com">Contáctame aquí</a>
                </section>
                <section className="social-media">
                    <h1 className="heading-1">Síguenos en Redes Sociales</h1>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </section>
                <p>&copy; 2024 Sport Five. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
};

export default Productos;

