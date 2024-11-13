import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearCuenta.css';

const CrearCuenta = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        ciudad: '',
        pais: '',
        usuario: '',
        password: '',
        confirmarPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificamos que las contraseñas coincidan
        if (formData.password !== formData.confirmarPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const nuevoUsuario = {
            ...formData,
            fechaHora: new Date().toLocaleString(),
        };

        // Leer los usuarios del almacenamiento local (si existe)
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verificar si el usuario ya existe
        const usuarioExistente = usuariosGuardados.find(
            (usuario) => usuario.usuario === formData.usuario
        );

        if (usuarioExistente) {
            alert('Este usuario ya existe. Elige otro nombre de usuario.');
            return;
        }

        // Agregar el nuevo usuario al array de usuarios
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

        alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
        navigate('/');  // Redirige al inicio de sesión (Login)
    };

    return (
        <div className="crear-cuenta-container">
            <h1 className="main-title">Crea tu Cuenta</h1>
            <section className="crear-cuenta-form">
                <form onSubmit={handleSubmit}>
                    {/* Campos del formulario */}
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        value={formData.usuario}
                        onChange={handleInputChange}
                        placeholder="Usuario"
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Contraseña"
                        required
                    />
                    <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmarPassword"
                        name="confirmarPassword"
                        value={formData.confirmarPassword}
                        onChange={handleInputChange}
                        placeholder="Confirmar Contraseña"
                        required
                    />
                    <button type="submit" className="submit-btn">Crear Cuenta</button>
                </form>
            </section>
        </div>
    );
};

export default CrearCuenta;



