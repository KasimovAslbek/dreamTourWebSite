import React from 'react';
import './index.css';
import Topbar from './components/Topbar';
import Kamchatka from './components/Kamchatka';
import Day1 from './components/Day1';
import Cost from './components/Cost';
import Application from './components/Application';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
        <Topbar />
        <Kamchatka />
        < Day1 />
        < Cost />
        < Application />
        < Team />
        < Footer />
    </React.StrictMode>
  );
}

export default App;
