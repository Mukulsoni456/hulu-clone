import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import { useState } from 'react';
import Cards from './components/Cards'
import requests from './requests';
function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending)
  return (
    <div className="App">
      <Header></Header>
      <Navbar setselectedOption={setselectedOption}></Navbar>
      <Cards selectedOption={selectedOption}></Cards>
    </div>
  );
}

export default App;
