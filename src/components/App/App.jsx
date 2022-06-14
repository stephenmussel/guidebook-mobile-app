import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProblemList from './ProblemList/ProblemList';
import ZoneList from './ZoneList/ZoneList';

function App() {

  const [problems, setProblems] = useState([]);
  const [zones, setZones] = useState([]);

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

  return (
    <div className='App'>
      {/* {JSON.stringify(problems)} */}
      <ZoneList 
        zones={zones}
        fetchZones={fetchZones}
      />
      <ProblemList 
        problems={problems}
        fetchProblems={fetchProblems}
      />
    </div>
  );
}

export default App
