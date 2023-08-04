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
                                Pagina web estatica. Realizada con html5 y css3 nativo.
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
                                Aplicacion desarrollada con html5 css3 y javascript, guardando datos en localstorage.
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
                                Se presentan datos en una interfaz llamados desde una API.
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
                                Aplicacion Web creada con react vite, con una base de datos en firestore.
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
