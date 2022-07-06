import './App.css';
import React,{ useState,useEffect } from 'react';
import Loading from './funct/Loading';
import Tours from './funct/Tours';
const url='https://course-api.com/react-tours-project';
/* 
   if an example with Promises: 
      if you want to fetch data from an API.
      It's standard React stuff, you put the API call in componentDidMount() 
  
   How To Use 'Async Await' in React: using the 'async/await' syntax.
      Used mostly for data fetching and other initialization stuff 
      componentDidMount is a nice place for async/await.
   
   Les Hooks sont une nouveauté de React 16.8. Ils permettent de bénéficier d’un état local
   et d’autres fonctionnalités de React sans avoir à écrire de classes.
      // Similaire à componentDidMount et componentDidUpdate :
*/
 function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

const fetchTours = async () => {
  setLoading(true)
  try{
      const response =await fetch(url);
      const tours = await response.json()
      setLoading(false);
      setTours(tours);
  }
  catch(error)
  {
    setLoading(false);
    console.log(error);
  }
};

useEffect(()=>{
  fetchTours();
},[])

if(loading){
    return (
      <div className="container">
       <Loading/>
      </div>
    );
  }

if(tours.length==0)
  {
    return(
      <div className='container'>
        <h2>No Tours left</h2>
        <button className='remove' onClick={fetchTours}>refresh</button>
      </div>

    )
  }

  return (<div className="container">
    <Tours tours={tours} removeTour={removeTour}/>
  </div>);
}
export default App;
