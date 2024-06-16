import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Create from './CreatingIssue';
import './App.css';

function App() {
	const [issue, setIssue] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('http://localhost:8080');
          const result = res.json();
          console.log(result)
          return result;
        }	
        fetchData().then(res => setIssue(res));
    }, []);

  return (
    <div className="App">
        <div className="black-nav">
        <div>issue_client</div>
      </div>      
      {
        issue.map(function(a, i) {
          return <div className="list" key={i}>
            
            {issue[i].id}
            <h4>{issue[i].title}</h4>
            {issue[i].description}
          
        </div>
        })
      }    
    </div> 
  )
}


export default App;
