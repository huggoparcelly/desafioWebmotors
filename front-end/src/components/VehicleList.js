import { useEffect, useState } from 'react';
import { fetchList } from '../services';

import VehicleUpdate from './VehicleUpdate';

import { ListGroup } from 'react-bootstrap';
import VehicleDetails from './VehicleDetails';

function VehicleList() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getList() {
      const result = await fetchList();
      
      if (result) setList(result);
    }
    getList();
  }, []);

  
  return(
    <div>
      <ListGroup variant="flush">
         {list.map((vehicle, index) => 
          (<ListGroup.Item className="fs-7" key={index}>
            Marcar: {vehicle.marca} - Modelo: {vehicle.modelo} - Versão: {vehicle.versao}
            <VehicleDetails id={vehicle.ID}/>
            <VehicleUpdate id={vehicle.ID}/>
          </ListGroup.Item>)
        )}
      </ListGroup>
    </div>
  );
}

export default VehicleList;