import { useState } from 'react';
import Modal from './components/modal/Modal';
import Profile from './components/profile';
import Sidebar from './components/sidebar';
import './index.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [light, setLight] = useState(true);

  const theme = {
    background: light ? '#fff' : '#000',
    color: light ? '#000' : '#fff',
  };

  return (
    <div className="container" style={theme}>
      <Sidebar />
      <Profile setIsOpen={setIsOpen} setLight={setLight} />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
