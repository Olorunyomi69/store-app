import './App.css';
import { BrowserRouter as Router, Routes, Route, }  from 'react-router-dom';
import Navbar from './components/Navbar';
import { Cart, Shop } from './pages/index';
import { ShopContextProvider } from './context/shopContextProvider';

 
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
     <Router>
     <Navbar/>
      <Routes>
          <Route path='/' element= {<Shop/>}/>
          <Route path='/cart' element= {<Cart/>}/>
      </Routes>

     </Router>

    </ShopContextProvider>
     
    </div>
  );
}

export default App;
