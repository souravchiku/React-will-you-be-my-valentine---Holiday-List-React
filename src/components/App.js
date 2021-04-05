import React, { useState } from 'react';

const App = () => {
  const [citylist, setcitylist] = useState([

    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" }

  ])

  const List=()=>{
    // let count=0;
    const city= citylist.map((item,key)=>{
      if(item.country ==='India')
      return<li key={`location${key+1}`}>{item.name}</li>
     
    })
    return <ol>{city}</ol>
  }
  return (
    <div id="main">
      {List() }
    </div>
  );
};

export default App;