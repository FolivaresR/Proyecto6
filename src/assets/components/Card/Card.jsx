// CardComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css'; // Import the CSS file for custom styles

const CardComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Card className="custom-card">
                        <Card.Img variant="top" src="Tutelocompraste.JPG" />
                        <Card.Body>
                            <Card.Title>Tutelocompraste</Card.Title>
                            <Card.Text>
                            Página web que destaca por su elegante diseño y navegación intuitiva, creada con HTML y CSS.
                            </Card.Text>
                            <Button variant="primary" href="https://folivaresr.github.io/ProyectoUdd1/" target='_blank'>Ir</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-card">
                        <Card.Img variant="top" src="CRUDLOCAL.JPG" />
                        <Card.Body>
                            <Card.Title>CRUD</Card.Title>
                            <Card.Text>
                            Aplicación web moderna con HTML5, CSS y JavaScript, que aprovecha localstorage para almacenar datos de manera eficiente.
                            </Card.Text>
                            <Button variant="primary" href="https://folivaresr.github.io/proyecto2/" target='_blank'>Ir</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-card">
                        <Card.Img variant="top" src="Dashboard.png" />
                        <Card.Body>
                            <Card.Title>Dashboard</Card.Title>
                            <Card.Text>
                            Dashboard interactivo que muestra datos actualizados en tiempo real, obtenidos a través de una API externa.
                            </Card.Text>
                            <Button variant="primary" href="https://folivaresr.github.io/proyecto3UDD/" target='_blank'>Ir</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className="custom-card">
                        <Card.Img variant="top" src="RESTAURANTE.JPG" />
                        <Card.Body>
                            <Card.Title>Restaurant App</Card.Title>
                            <Card.Text>
                            Aplicación web potente y rápida construida con React Vite, integrando una base de datos en Firestore para un almacenamiento seguro y escalable de datos.
                            </Card.Text>
                            <Button variant="primary" href="https://proyecto4udd.onrender.com" target='_blank'>Ir</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
