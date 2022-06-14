import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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

  useEffect(() => {
    fetchProblems();
  }, [])

  return (
    <div className='App'>
      {/* {JSON.stringify(problems)} */}
    </div>
  );
}

export default App
