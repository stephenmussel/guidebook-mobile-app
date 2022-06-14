import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProblemList from './ProblemList/ProblemList';

function App() {

  const [problems, setProblems] = useState([]);

  const fetchProblems = () => {
    console.log('in fetchProblems!');

    axios.get('/mn/problems').then(response => {
      console.log('these are the problems', response);
      setProblems(response.data);
    }).catch(err => {
      console.log('err in fetchProblems!', err);
    });
  };

  return (
    <div className='App'>
      {/* {JSON.stringify(problems)} */}
      <ProblemList 
        problems={problems}
        setProblems={setProblems}
        fetchProblems={fetchProblems}
      />
    </div>
  );
}

export default App
