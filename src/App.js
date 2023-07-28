import React, { useState } from 'react';

import Nav from './nav';
import BelowNav from './belownav';
import MainBody from './components/mainbody';

const App = () => {
  const [selectedItem, setSelectedItem] = useState([]);


console.log(selectedItem,`hello`)

  return (
    <div className="app-container">
      <Nav />
      <BelowNav setSelectedItem={setSelectedItem} />
      <MainBody selectedItem={selectedItem}/>
    </div>
  );
};

export default App;