import React from 'react';
import {testUser} from "./data"
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';


function App() {
  return (
    <>
      <Header avatar={testUser.avatar}/>
      <Main/>
      <Footer name={testUser.name} year={testUser.year}/>
    </>

  );
}

export default App;
