import { Routes, Route } from "react-router-dom";
import "./App.css";
import Continent from "./Pages/Continent";
import Country from "./Pages/Country";
import Destination from "./Pages/Destination";
import DestinationDetails from "./Pages/DestinationDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent />} />
        <Route path="/:continentName" element={<Country />} />
        <Route path="/:continentName/:countryName" element={<Destination />} />
        <Route
          path="/:continentName/:countryName/:destinationName"
          element={<DestinationDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
