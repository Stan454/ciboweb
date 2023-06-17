import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Restaurants from './Pages/Restaurants';
import Account from './Pages/Account';
import Layout from './Components/Layout';

function App() {
  return (
    <div>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Restaurants' element={<Restaurants />} />
        <Route path='/Account' element={<Account />} />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
