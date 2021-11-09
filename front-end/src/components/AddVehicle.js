import { Component } from "react";
import { fetchSave } from '../services';

import { Form, Row, Col, Button } from 'react-bootstrap';

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: '',
      modelo: '',
      versao: '',
      ano: '',
      quilometragem: '',
      observacao: ''
    };

  }

  handleChange = (event) => {
    const {name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    const formData = this.state;
    fetchSave(formData);
  }

  render() {
    return (
      <Form className="w-75 mb-3" onSubmit={this.handleSubmit}>
        <Row className="align-items-center">
          <Col>
            <Form.Control placeholder="Marca" name="marca" onChange={this.handleChange}/>
            <Form.Control placeholder="Modelo" name="modelo" onChange={this.handleChange}/>
            <Form.Control placeholder="Versao" name="versao" onChange={this.handleChange}/>
            <Form.Control placeholder="Ano" name="ano" onChange={this.handleChange}/>
            <Form.Control placeholder="km" name="quilometragem" onChange={this.handleChange}/>
            <Form.Control placeholder="Observacao" name="observacao" onChange={this.handleChange}/>
          </Col>
        </Row>
        <Button type='submit' variant="success">Salvar</Button>
      </Form>
    );
  }
}

export default AddVehicle;