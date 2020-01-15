import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  let subscribersList = [
      {
        id: 1,
        name: "Sundar",
        phone: "9597995985"
      },
      {
        id: 2,
        name: "Punisher",
        phone: "8796059330"
      }
  ]
  return (
    <div>
      <Header/>
      <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        {
          subscribersList.map(sub => {
            return <div key={sub.id} className="grid-container">
                   <span className="grid-item">{sub.name}</span>
                   <span className="grid-item">{sub.phone}</span>
                   <button className="custom-btn del-btn">Delete</button>
                   </div>  
          })
        }


        </div>
    </div>
  );
}

export default App;
