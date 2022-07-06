import React, { useEffect, useState } from 'react';
import './App.css';
const url='https://course-api.com/react-tabs-project';

function App() {
  const [loading,setLoading]=useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);


  const fetchjobs = async () => {
    const response= await fetch(url);
    const newjobs= await response.json();
    setJobs(newjobs);
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchjobs();
  },[]) // []:deps — If present, effect will only activate if the values in the list change.

  if(loading){
    return(
      <h1>Loading ...</h1>
    )
  }

  const { company, dates,duties,title} = jobs[value];

  return (
    <section className="section">
      <div className='title'>
        <h2>Expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='contenu-jobs'>
        <div className='button'>
          {jobs.map((item,index) => {
              return(
                <button key={item.id} onClick={()=>
                  setValue(index)}  className={`btn ${index === value && 'active-btn'}`}>
                    {item.company}
                </button>
              );
            })
          }
        </div>
        <article className='info'>
          <h3 className='titre' >{title}</h3>
          <h4 className='company'>{company}</h4>
          <p className='dates'>{dates}</p>
          {duties.map((duty,index) => {
            return(
              <div key={index} className="desc">
                <p>*** {duty}</p> 
              </div>
            )
        })}
        </article>
        
      </div>
    </section>
  );
}

export default App;
