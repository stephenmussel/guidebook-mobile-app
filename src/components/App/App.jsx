import {useState} from 'react';

const creatureData = [
  {name :'Unicorn', origin: 'Britain'},
  {name : 'Sphinx', origin: 'Egypt'},
  {name: 'Jackalope', origin: 'America'}
];

function App () {
 
  const [creatureList, setCreatureList] = useState(creatureData)
  
  return (
    <div>
      <ul>
        {creatureList.map(creature => 
         (<li key={creature.name}>{creature.name} is from {creature.origin}</li>)
        )}
      </ul>
    </div>
  );

}

export default App
