import { Component } from "react";
import { fetchDetails } from '../services';

import { Button } from 'react-bootstrap';


class VehicleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: this.props.id,
      marca: '',
      modelo: '',
      versao: '',
      ano: '',
      quilometragem: '',
      observacao: '',
      details: false,
    };
  }



  handleClickDetails = async () => {
    
    const veihcle = await fetchDetails(this.state.ID);
    this.setState({...veihcle[0]})
    this.setState(prevState => ({
      details: !prevState.details
    }) );
  }

  renderDetails = () => {
    const {ano, quilometragem, observacao} = this.state;
    return (
      <div>
        Ano: {ano} - Km: {quilometragem} - Observação: {observacao}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.details ? this.renderDetails(): <span></span>}
        <Button
          type='submit'
          variant="info"
          onClick = {this.handleClickDetails}
        >Detalhes</Button>
      </div>
    );
  }
}

export default VehicleDetails;