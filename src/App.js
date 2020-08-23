import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contacts from "./components/HowItWorks/HowItWorks";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/about" component={About}/>
                    <Route path="/howitworks" component={Contacts}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}


export default App;
