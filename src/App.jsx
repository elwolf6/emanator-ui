import Settings from "./components/Settings"
import ContentContainer from "./components/ContentContainer";

import { useState } from 'react';

function App() {
  const [open,setOpen] = useState(false);
  const [connected,setConnected] = useState(false);
  return (
    <div className="scrollbar">
      <div className='bottom-bar'>
        <input type='text' placeholder='Enter message...' className='bottom-bar bottom-bar-input' />
      </div>
      <Settings open={open} setOpen={setOpen} connected={connected} setConnected={setConnected} />
      <ContentContainer />
    </div>
  );
}

export default App
