import { SearchBar } from 'components/SearchBarFlight';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fakeData } from "../../example";

const Home = () => {
  
  return (
    <div>
      Pagina de inicio
      <SearchBar>
        <SearchBar.Origin />
        <SearchBar.Destiny />
      </SearchBar>
    </div>
  );
};

export default Home;
