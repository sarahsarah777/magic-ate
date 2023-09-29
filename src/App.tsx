import React from 'react';
import './App.css';
import {StoreContext} from './uitls'
import Store from './Store'
import {MagicAte} from './MagicAte/MagicAte';

function App() {
  const store = new Store()
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <header className="App-header">
          <MagicAte/>
        </header>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
