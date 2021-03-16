import React from 'react'
import './App.css'
import ProfilPhoto from './Component/Profile/ProfilPhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="por" sm={4}> <ProfilPhoto /></Col>
          <Col className="fn" sm={4}> <FullName /></Col>
          <Col className="add" sm={4}> <Address /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
