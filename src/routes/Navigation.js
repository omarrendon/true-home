import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='reservaciones' element={<Reservation />} />
      </Routes>
    </BrowserRouter >
  );
}