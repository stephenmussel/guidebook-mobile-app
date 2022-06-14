import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProblemList from './ProblemList/ProblemList';
import ZoneList from './ZoneList/ZoneList';
import AreaList from '../AreaList/AreaList';

function App() {

  const [problems, setProblems] = useState([]);
  const [zones, setZones] = useState([]);
  const [areas, setAreas] = useState([]);

  const fetchProblems = () => {
    console.log('in fetchProblems!');

    axios.get('/mn/problems').then(response => {
      console.log('these are the problems', response);
      setProblems(response.data);
    }).catch(err => {
      console.log('err in fetchProblems!', err);
    });
  };

  const fetchZones = () => {
    console.log('in fetchZones!');

    axios.get('/mn/zones').then(response => {
      console.log('these are the zones', response);
      setZones(response.data);
    }).catch(err => {
      console.log('err in fetchZones!', err);
    });
  };

  const fetchAreas = () => {
    console.log('in fetchAreas!');

    axios.get('/mn/areas').then(response => {
      console.log('these are the areas', response);
      setAreas(response.data);
    }).catch(err => {
      console.log('err in fetchAreas!', err);
    });
  };

  useEffect(() => {
    fetchProblems();
    fetchZones();
    fetchAreas();
  }, [])

  return (
    <div className='App'>
      <AreaList 
        areas={areas}
      />
      <ZoneList 
        zones={zones}
      />
      <ProblemList 
        problems={problems}
      />
    </div>
  );
}

export default App
