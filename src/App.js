import React from "react";
import Home from "./pages/Home";
import Header from "./pages/Header/Header";
import Footer from './pages/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddExpense from "./pages/addExpense/AddExpense";
function App() {
  return (
    <>
       <Router>
          <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/add-expense" element={<AddExpense/>}/>
              
          </Routes>
       
          <Footer/>
       </Router>
       
    </>
  );
}

export default App;
