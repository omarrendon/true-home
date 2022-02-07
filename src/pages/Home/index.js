import { useEffect } from 'react';
import { SearchBar } from 'components/SearchBarFlight';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from 'actions/fetchFlightsActions';
import style from './home.module.css';
import Modal from 'components/Modal';
import ScheduleList from 'components/ScheduleList';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.flights);


  useEffect(() => {
    dispatch(fetchFlights());  
  }, []);

  const loadingModal = () => {
    return (
      <Modal
        showModal={isLoading}
        showClose={true}
        content={
          <div>
            <h4>Cargando...</h4>
          </div>
        }
      />
    )
  };
  return (
    <div className={style.homeContainer}>
      <h2 className={style.titleHome}>Selecciona tu vuelo</h2>
      <SearchBar>
        <SearchBar.Origin />
        <SearchBar.Destiny />
      </SearchBar>
      <ScheduleList />
      {loadingModal()}
    </div>
  );
};

export default Home;
