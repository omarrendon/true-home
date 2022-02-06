import { SearchBar } from 'components/SearchBarFlight';
import ScheduleList from 'components/ScheduleList';
import style from './home.module.css';



const Home = () => {

  return (
    <div className={style.homeContainer}>
      <h2 className={style.titleHome}>Selecciona tu vuelo</h2>
      <SearchBar>
        <SearchBar.Origin />
        <SearchBar.Destiny />
      </SearchBar>
      <ScheduleList />
    </div>
  );
};

export default Home;
