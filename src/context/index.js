import { createContext } from 'react';

const AppContext = createContext([{}, (obj) => obj]);
export default AppContext;
