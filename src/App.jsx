import { useState } from 'react';
import Modal from './components/modal/Modal';
import Profile from './components/profile';
import Sidebar from './components/sidebar';
import './index.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <Sidebar />
      <Profile setIsOpen={setIsOpen} />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
