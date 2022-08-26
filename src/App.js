import JSON from './SCPunits.json';
import React, { Component }  from 'react';

const scpwiki = JSON.map(

  (scp) => {
    return(
      <div className="card card-body border-light border border-5 bg-dark">

        <h3 className="card-header bg-secondary text-light">{scp.item}</h3>
        
        <h4 className="card-title text-light">{scp.objectclass}</h4>
        <p className="card-title"><img src={scp.image} alt=""></img></p>

        <h5 className="card-title text-light">Description</h5>
        <p className="card-text text-light">{scp.description}</p>

        <h5 className="card-title text-light">Procedures</h5>
        <p className="card-text text-light">{scp.procedures}</p>
        
      </div>
      
    );
  }

);

function App() {
  return (
    <div>
      {scpwiki}
    </div>
  );
}

export default App;
