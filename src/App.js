import './App.css';

// Fixed.
import Menu from './Components/Menubar/Menu';
import Translator from './Components/Translator/Translator';
import Popup from './Components/CardPopup/Popup';
import Emergency from './Components/EmergencyLocation/Emergency';
import Footer from './Components/Footer/Footer';

// Planning Section.
import Planning from './Components/NavBars/Planning';
import TripPlanner from './Components/PlanningSection/AIPlannedTrip/PlanTrip';
import SustainableDevelopment from './Components/PlanningSection/SustainableDevelopment/SustainableDevelopment';
import Reviews from './Components/PlanningSection/Reviews/Reviews';
import Weather from './Components/PlanningSection/Weather/weather';

// Travelling Section.
import TourGuide from './Components/TravellingSection/TourGuides/TourGuide';
import TravellingActivities from './Components/TravellingSection/TravellingActivities';
import TravellingNews from './Components/TravellingSection/TravellingNews';
import ViewMetroMaps from './Components/TravellingSection/MetroCities/ViewMetroMaps';
import Header from './Components/PlanningSection/Header/Header';

const getLocation = () => {
  const successCallback = (position) => {
    return position;
  };

  const errorCallback = (error) => {
    return error;
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function App() {
  
  getLocation();

  return (
    <div className="App">

      {/* <Header/> */}
      <Menu />
      <Translator />
      <Emergency />

      <div className='planning'>
        <Planning />
        <TripPlanner />
        <Weather />
        <SustainableDevelopment />
        <Reviews />
      </div>

      <div className="travelling">
        {/* <TravellingNews /> */}
        {/* <TravellingActivities /> */}
        <TourGuide />
        {/* <ViewMetroMaps/> */}
      </div>

    <Footer/>

    </div>
  );
}

export default App;