import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from API
    // For now, we'll use dummy data
    const dummyProfiles = [
      { id: 1, name: "John Doe", description: "Software Engineer", lat: 40.7128, lng: -74.0060 },
      { id: 2, name: "Jane Smith", description: "Designer", lat: 34.0522, lng: -118.2437 },
      // Add more profiles...
    ];
    setProfiles(dummyProfiles);
    setFilteredProfiles(dummyProfiles);
  }, []);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSearch = (searchTerm) => {
    const filtered = profiles.filter(profile => 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="App">
      <h1>Profile Map Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <ProfileList 
          profiles={filteredProfiles} 
          onProfileClick={handleProfileClick} 
        />
        <Map selectedProfile={selectedProfile} />
      </div>
    </div>
  );
}

export default App;