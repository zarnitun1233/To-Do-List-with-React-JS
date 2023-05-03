import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link, 
  useParams
} from "react-router-dom";

const users = [
  {id:1, name:"Mg Mg", gender:"m"},
  {id:2, name:"Zaw Zaw", gender:"m"},
  {id:3, name:"Hla Hla", gender:"f"},
  {id:4, name:"Mya Mya", gender:"f"},
];

const Male = props => {
  return (
    <div>
      <ul>
        {users.filter(u => u.gender === "m").map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}

const Female = props => {
  return (
    <div>
      <ul>
        {users.filter(u => u.gender === "f").map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}

const User = props => {
  const { name } = useParams();
  return (
    <h1>User {name}</h1>
  )
}

const App = props => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="user/alice">Alice</Link></li>
          <li><Link to="user/bob">Bob</Link></li>
        </ul>
      </div>
      <div style={{background: "cyan", padding: 20}}>
        <Routes>
          <Route path="/user/:name" exact element={<User/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;