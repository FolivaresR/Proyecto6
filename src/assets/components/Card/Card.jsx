import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
    return (
    <div className="container">
        <div className="row">
        <div className="col-md-3">
            <Card>
            <Card.Img variant="top" src="isibaby.png" />
            <Card.Body>
                <Card.Title>ISSIBABY</Card.Title>
                <Card.Text>
                Pagina web estatica. Realizada con html5 y css3 nativo.
                </Card.Text>
                <Button variant="primary" href="https://luisol2022.github.io/proyectoudd01/" target='_blank'>Ir</Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
            <Card.Img variant="top" src="src/assets/img/CRUD.png" />
            <Card.Body>
                <Card.Title>CRUD</Card.Title>
                <Card.Text>
                Aplicacion desarrollada con html5 css3 y javascript, guardando datos en localstorage.
                </Card.Text>
                <Button variant="primary" href="https://luisol2022.github.io/ProyectoUdd2/" target='_blank'>Ir</Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
            <Card.Img variant="top" src="src/assets/img/Dashboard.png" />
            <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                <Card.Text>
                Se presentan datos en una interfaz llamados desde una API.
                </Card.Text>
                <Button variant="primary" href="https://luisol2022.github.io/Proyecto_UDD_3/" target='_blank'>Ir</Button>
            </Card.Body>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
            <Card.Img variant="top" src="src/assets/img/completo.png" />
            <Card.Body>
                <Card.Title>Restaurant App</Card.Title>
                <Card.Text>
                Aplicacion Web creada con react vite, con una base de datos en firestore.
                </Card.Text>
                <Button variant="primary" href="https://proyecto4-udd.onrender.com" target='_blank'>Ir</Button>
            </Card.Body>
            </Card>
        </div>
        </div>
    </div>
    );
};

export default CardComponent;
