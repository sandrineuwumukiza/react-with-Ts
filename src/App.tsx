import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/greet';
import { Person } from './components/person';
import { PersonList } from './components/personList';
import { Status } from './components/status';
import { Heading } from './components/heading';
import { Oscar } from './components/oscar';

function App() {
  const PersonName = {
    first:'Bruce',
    last:'Wayne  '
  }

  const nameList = [{
    first:'Bruce',
    last:'Wayne'
  },
  {
    first:'Clark',
    last:'Kent'
  },
  {
    first:'Princess',
    last:'Diana'
  },
]

  
  return (
    <div className="App">
      <Greet name = 'Vishwas' isLoggedIn={false}/>
      <Person name={PersonName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      
    </div>
  );
}

export default App;
