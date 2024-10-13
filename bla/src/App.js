// import React, { useState, useEffect } from "react";
// import TreeView from "./components/TreeView";
// import ItemDetail from "./components/ItemDetail";
// import Login from "./components/Login";
// import { buildTree } from "./utils/buildTree";
// import './App.css';
// import toggleIcon from './toggle-icon.png'; 
// // import closeIcon from './imagess.png'; // Import the close icon image

// const API_ITEMS_URL = 'http://localhost:5000/api/items';
// const API_LOCATIONS_URL = 'http://localhost:5000/api/locations';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [itemsData, setItemsData] = useState([]);
//   const [locationsData, setLocationsData] = useState([]);
//   const [error, setError] = useState(null);
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if mobile

//   const handleSelectItem = (item) => {
//     setSelectedItem(item);
//     if (isMobile) {
//       setIsNavbarOpen(false); // Close navbar when an item is selected on mobile
//     }
//   };

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//     if (isNavbarOpen && isMobile) {
//       setSelectedItem(null); // Deselect item if navbar opens
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const itemsResponse = await fetch(API_ITEMS_URL);
//         if (!itemsResponse.ok) throw new Error('Failed to fetch items');
//         const items = await itemsResponse.json();
//         setItemsData(items);

//         const locationsResponse = await fetch(API_LOCATIONS_URL);
//         if (!locationsResponse.ok) throw new Error('Failed to fetch locations');
//         const locations = await locationsResponse.json();
//         const nestedLocations = buildTree(locations, items);
//         setLocationsData(nestedLocations);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!isAuthenticated) {
//     return <Login onLogin={setIsAuthenticated} />;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="App">
//       {/* Animated Background */}
//       <div className="background">
//         <div className="cube"></div>
//         <div className="cube"></div>
//         <div className="cube"></div>
//         <div className="cube"></div>
//         <div className="cube"></div>
//         <div className="cube"></div>
//       </div>

//       {/* Main Content */}
//       <div className="container-fluid">
//         <header className="App-header">
//           {/* Logo */}
//           {/* <div className="logo">
//             <span>N</span> 
//           </div> */}

//           <h1>Warehouse Management System</h1>

//           {/* Toggle Navbar Button */}
//           <img
//             src={toggleIcon}
//             alt="Toggle Navbar"
//             onClick={toggleNavbar}
//             className="toggle-button"
//           />
//         </header>

//         {/* <nav>
//           <ul>
//             <li><a href="#">Dashboard</a></li>
//             <li><a href="#">Inventory</a></li>
//             <li><a href="#">Settings</a></li>
//             <li><a href="#">Reports</a></li>
//             <li><a href="#">Help</a></li>
//           </ul>
//         </nav> */}

//         <div className="content">
//           {isNavbarOpen && (
//             <div className="navbar open">
//               {/* <img 
//                 src={closeIcon} // Use the close icon image here
//                 alt="Close Navbar" 
//                 onClick={toggleNavbar} 
//                 className="navbar-close-button close-icon" // Add close-icon class for size control
//               /> */}
//               <TreeView 
//                 data={{ items: itemsData, locations: locationsData }}
//                 onSelectItem={handleSelectItem}
//               />
//             </div>
//           )}
//            {/* Only render this div when selectedItem exists */}
//     {selectedItem && (
//         <div className={`item-detail ${isNavbarOpen && isMobile ? 'hidden' : ''}`}>
//             <ItemDetail item={selectedItem} />
//         </div>
//     )}
//         </div>

//         {/* Header Content */}
//         {/* <section className="header-content">
//           <h1>Welcome</h1>
//           <p> Welcome to our studio. We are a passionate group of people,<br/>
//               making high quality products designed to make your life easier.</p>
//           <button>Know more</button>
//           <button>Meet us</button>
//         </section> */}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import TreeView from "./components/TreeView";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import { buildTree } from "./utils/buildTree";
import dataJson from './data.json'; // Import the JSON data
import './App.css';
import toggleIcon from './toggle-icon.png'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [error, setError] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if mobile

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    if (isMobile) {
      setIsNavbarOpen(false); // Close navbar when an item is selected on mobile
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen && isMobile) {
      setSelectedItem(null); // Deselect item if navbar opens
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Instead of fetching data, use the imported JSON data
    const items = dataJson.items;
    const locations = dataJson.locations;
    const nestedLocations = buildTree(locations, items);
    
    setItemsData(items);
    setLocationsData(nestedLocations);
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>

      {/* Main Content */}
      <div className="container-fluid">
        <header className="App-header">
          <h1>Warehouse Management System</h1>

          {/* Toggle Navbar Button */}
          <img
            src={toggleIcon}
            alt="Toggle Navbar"
            onClick={toggleNavbar}
            className="toggle-button"
          />
        </header>

        <div className="content">
          {isNavbarOpen && (
            <div className="navbar open">
              <TreeView 
                data={{ items: itemsData, locations: locationsData }}
                onSelectItem={handleSelectItem}
              />
            </div>
          )}
          {/* Only render this div when selectedItem exists */}
          {selectedItem && (
            <div className={`item-detail ${isNavbarOpen && isMobile ? 'hidden' : ''}`}>
              <ItemDetail item={selectedItem} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
