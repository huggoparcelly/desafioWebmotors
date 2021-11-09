import { Component } from "react";
import { fetchUpdate, fetchRemove } from '../services';

import { Row, Col, Form, Button } from 'react-bootstrap';

class VehicleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      marca: '',
      modelo: '',
      versao: '',
      ano: '',
      quilometragem: '',
      observacao: '',
      updated: false,
    };
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    const { marca, modelo, versao, ano, quilometragem, observacao } = this.state;
    const formData = { marca, modelo, versao, ano, quilometragem, observacao };
    const id = this.props.id;
    await fetchUpdate(id, formData);
  }

  handleClickUpdate = () => {
    this.setState(prevState => ({
      updated: !prevState.updated
    }) )
  }

  handleClickDetails = () => {
    this.setState(prevState => ({
      details: !prevState.details
    }) )
  }

  handleRemove = async () => {
    await fetchRemove(this.state.id);
    window.location.reload();
  }

  renderUpdate = () => {
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
          <Col>
            <Button type='submit' variant="success">Salvar</Button>
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    return (
      <div>
        {this.state.updated ? this.renderUpdate() : <span></span>}
        <Button
          type='submit'
          name='updated'
          onClick = {this.handleClickUpdate}
          variant="warning"
        >Editar</Button>
        {' '}
        <Button
          type='submit'
          variant="danger"
          onClick = {this.handleRemove}
        >Excluir</Button>
      </div>
    );
  }
}

export default VehicleUpdate;