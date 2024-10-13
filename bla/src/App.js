import React, { useState, useEffect } from "react";
import TreeView from "./components/TreeView";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import { buildTree } from "./utils/buildTree";
import './App.css';
import toggleIcon from './toggle-icon.png'; 


const API_ITEMS_URL = 'http://localhost:5000/api/items';
const API_LOCATIONS_URL = 'http://localhost:5000/api/locations';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [error, setError] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    if (isMobile) {
      setIsNavbarOpen(false); 
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen && isMobile) {
      setSelectedItem(null); 
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
    const fetchData = async () => {
      try {
        const itemsResponse = await fetch(API_ITEMS_URL);
        if (!itemsResponse.ok) throw new Error('Failed to fetch items');
        const items = await itemsResponse.json();
        setItemsData(items);

        const locationsResponse = await fetch(API_LOCATIONS_URL);
        if (!locationsResponse.ok) throw new Error('Failed to fetch locations');
        const locations = await locationsResponse.json();
        const nestedLocations = buildTree(locations, items);
        setLocationsData(nestedLocations);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>

      
      <div className="container-fluid">
        <header className="App-header">
          

          <h1>Warehouse Management System</h1>

          
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
