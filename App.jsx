// import React, { useState } from 'react';
// import './App.css';
// import Profile from './Profile';
// import Reports from './Reports';
// import Notifications from './Notifications';

// const App = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const openCard = (cardType) => {
//     setSelectedCard(cardType);
//   };

//   const closeCard = () => {
//     setSelectedCard(null);
//   };

//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>Student Dashboard</h2>
//         <ul>
//           <li onClick={() => openCard('profile')}>Profile</li>
//           <li onClick={() => openCard('reports')}>Reports</li>
//           <li onClick={() => openCard('notifications')}>Notifications</li>
//         </ul>
//       </div>

//       {/* Content area */}
//       <div className="content-area">
//         <div className="background-overlay"></div>
//         <div className="welcome-message">
//           <h2>Welcome to Your Dashboard</h2>
//         </div>

//         {/* Display the selected card */}
//         {selectedCard === 'profile' && <Profile closeCard={closeCard} />}
//         {selectedCard === 'reports' && <Reports closeCard={closeCard} />}
//         {selectedCard === 'notifications' && <Notifications closeCard={closeCard} />}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import './App.css';
import Profile from './Profile';
import Reports from './Reports';
import Notifications from './Notifications';
import Login from './Login';
import ImageBack from './ImageBack';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openCard = (cardType) => {
    setSelectedCard(cardType);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app-container">

      <Login/>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Student Dashboard</h2>
        <ul>
          <li onClick={() => openCard('profile')}>Profile</li>
          <li onClick={() => openCard('reports')}>Reports</li>
          <li onClick={() => openCard('notifications')}>Notifications</li>
        </ul>
      </div>

      {/* Content area */}
      <div className="content-area">
        <div className="background-overlay"></div>
        <ImageBack imageUrl="https://as1.ftcdn.net/v2/jpg/09/17/67/52/1000_F_917675243_vKOH8wXvQEd0PZAbFQwTnFWKIfoZ9PLH.jpg">
        <div className="welcome-message">
          <h2>Welcome to Your Dashboard</h2>
        </div>
        {/* Display the selected card */}
        {selectedCard === 'profile' && <Profile closeCard={closeCard} />}
        {selectedCard === 'reports' && <Reports closeCard={closeCard} />}
        {selectedCard === 'notifications' && <Notifications closeCard={closeCard} />}
        </ImageBack>
      </div>
    </div>
  );
};

export default App;
