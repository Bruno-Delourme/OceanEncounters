import { useState } from 'react';

function App() {
  // Ajout d'un état pour gérer l'affichage du menu
  const [isMenuOpen, setIsMenuOpen] =useState(false);

  // Gestionnaire de clic pour basculer l'affichage du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div 
      className="banner" 
      style={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100%', 
        backgroundColor: 'black', 
        color: 'white', 
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)', 
        height: isMenuOpen ? '100vh' : 'auto',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', 
        
      }}
    >
    <button className="buttonMenu" onClick={toggleMenu} style={{color: 'white', backgroundColor: 'transparent', border: 'none', fontSize: '1.8rem', margin: '1rem'}}>MENU
    <ul style={{
  display: isMenuOpen ? 'flex' : 'none',
  flexDirection: 'column',
  height: '100vh',
  padding: 0,
  listStyleType: 'none',
}}>
  <li style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft : '1.5em', fontSize: '1.8rem' }}>NEWS</li>
  <li style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft : '1.5em',fontSize: '1.8rem' }}>MEDIA</li>
  <li style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft : '1.5em',fontSize: '1.8rem' }}>ABOUT US</li>
  <li style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft : '1.5em',fontSize: '1.8rem' }}>LIVE</li>
</ul>
      </button>
  </div>
  );
   
}


export default App
