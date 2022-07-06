
import './App.css';
import React,{useState} from 'react';
import data from './component/data';
import List from './component/List';
function App() {
  const [events,setEvents]=useState(data);
  return (
    <div>
      <section >
        <div className="container">
          <h1 >Event Manger </h1>
        </div>
        <div className='center'>
          <h2>All Events</h2>
          <List events={events}/>
          <button className='buttondelete' onClick={()=> setEvents([])}>Delete all</button>
        </div>
      </section>
    </div>
  );
}

export default App;
