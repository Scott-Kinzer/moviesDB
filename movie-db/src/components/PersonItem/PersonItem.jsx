import React from 'react';

export default function PersonItem({person}) {
  return (<div style={{width:' 200px', 
    height: '300px',
    background: 'purple',
    opacity: '0.7',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
    alignItems: 'center',
    fontSize: '15px', boxSizing: 'border-box',
    padding: '10px',
    color: 'black'
  }}>

      <div>NAME: {person.name}</div>
      <div>POPULARITY: {person.popularity}</div>

  </div>);
}
