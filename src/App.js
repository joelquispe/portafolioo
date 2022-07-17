import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import  HomePage from './pages/homepage';
function App() {
  return (
    
      <Routes>
        <Route path="/portafolio" element={<HomePage/>}></Route>
      </Routes>
   
  );
}

export default App;
