import React from 'react';
import { useNavigate } from 'react-router-dom';  // Necesitamos esto para redirigir al usuario
import '../css/elementos.css';  // Estilos del header

const HeaderElementos = ({ titulo }) => {
    const navigate = useNavigate();  // Para navegar entre rutas

    const handleGoBack = () => {
        navigate('/productos');  // Redirige al listado de productos
    };

    return (
        <header className="header-producto">
            {/* Botón de regreso dentro del header */}
            <button className="back-button" onClick={handleGoBack}>Regresar</button>

            <div className="header-content">
                <h6 className="header-title-producto">{titulo}</h6>
            </div>
        </header>
    );
};

export default HeaderElementos;

