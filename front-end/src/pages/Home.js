import AddVehicle from '../components/AddVehicle';
import VehicleList from '../components/VehicleList';

function Home() {
  
  return(
    <div>
      <h1>Webmotors</h1>
      <VehicleList />
      <AddVehicle />
    </div>
  );
}

export default Home;