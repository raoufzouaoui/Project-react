import React,{ useState } from 'react';
import './App.css';
import data from './folder/data';
import Question from './folder/question';

function App() {
  
  const [questions,setQuestions]=useState(data);
  return (
    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className='info'>
        {questions.map((question)=>{
          return(
          <Question key={question.id} {...question}/>
          )
        })}
      </section>     
    </div>
  );
};
export default App;
