import logo from './logo.svg';
import './App.css';

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import  HomePage from './pages/homepage';
function App() {
  return (
    <BrowserRouter Basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
