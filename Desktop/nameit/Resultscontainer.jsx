import React from "react";
import './Resultcontainer.css';
import NameCard from './NameCard.jsx'

const ResultsContainer = ( {suggestedNames}) =>{
    const suggestedJsx = suggestedNames.map(suggestedName => {
        return <NameCard suggestedName = {suggestedName} />
    })
    return(
        <div className = "results-container">
          <p>{suggestedJsx}</p>  
        </div>
    );
};

export default ResultsContainer;