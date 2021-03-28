import { useState } from 'react';
import Routes from './routes/index';
import MainContext from './context/index';

function App() {
  const state = useState({ gender: null });
  return (
    <div className="App">
      <MainContext.Provider value={state}>
        <Routes />
      </MainContext.Provider>
    </div>
  );
}

export default App;
