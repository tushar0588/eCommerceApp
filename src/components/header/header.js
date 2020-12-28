import React from "react";
import navbar from "./navbar/navbar";
import './header.css';
import searchBar from './searchBar/searchBar';



function header () {
    return (
        <React.Fragment>
            <h1 id="h12"> hello</h1>  
            <searchBar/>
            <navbar className="navigationBar"/>
    </React.Fragment>
  
    )}

export default header;