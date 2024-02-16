import React from "react";
import { Route, Routes } from "react-router-dom";
import Asadbek from './components/Asadbek/Asadbek';
import Ozodbek from './components/Ozodbek/Ozodbek';
import Asilbek from './components/Asilbek/Asilbek';
import Javlon from './components/Javlon/Javlon';
import Muhammad from './components/Muhammad/Muhammad';
import Zuhriddin from './components/Zuhriddin/Zuhriddin';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={Ozodbek} />
      <Route path="/asadbek" Component={Asadbek} />
      <Route path="/asilbek" Component={Asilbek} />
      <Route path="/javlon" Component={Javlon} />
      <Route path="/muhammad" Component={Muhammad} />
      <Route path="/zuhriddin" Component={Zuhriddin} />
    </Routes>
    </>
  );
}

export default App;
