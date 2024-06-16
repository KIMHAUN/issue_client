import React from 'react';
import axios from 'axios';
import { useState, Suspense, useEffect, lazy } from 'react';
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css';

const Create = lazy(() => import("./CreateIssue.js"));

function App() {
	const [issue, setIssue] = useState([]);
  let navigate = useNavigate();
  	
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
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Issue Client Main
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/create");
              }}
            >
              Creating Issue
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
      { <Suspense fallback={<div>Loading...</div>}>
        <Routes> 
          <Route path="/" element={
           
            issue.map((a, i)=> 
                <div className="list-item" key={i}>
                  <Link prefetch={false} href={`/detail/${a._id}`}><h4>{issue[i].title}</h4></Link>
                  <p>{issue[i].description}</p>
                  <Link href={`/update/${a._id}`}><h4>✏️</h4></Link>
                  <span onClick={(e)=>{
                    fetch('/api/post/delete?issue_id=' + a._id)
                    .then((r)=> r.json())
                    .then(()=>{ 
                        //success
                        console.log('삭제 완료')
                        e.target.parentElement.style.opacity = 0
                        setTimeout(()=> {
                            e.target.parentElement.style.display = 'none'
                        }, 1000)
                      }).catch((error)=>{
                        //fail
                        console.log(error)
                      })
                  }}>🗑️</span> 
                </div>
            )
          
          }> </Route>
          <Route path="/create" element={<Create />} />
        </Routes>
        </Suspense> }
 
     
       <div>
        
          </div>
    </div> 
  )
}


export default App;
