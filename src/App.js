import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';


function App() {
  return (
     <>
     <Navbar />
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/rooms' element={ <Rooms />} />
      <Route path='/rooms/:slug' element={<SingleRoom />} />
      <Route path='*' element={ <Error />} />
     </Routes>
     </>
  );
}

export default App;
