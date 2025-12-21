import React, {useState} from 'react';
import {testUser} from "./data"
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';





function App() {
  const [activeTasks, setActiveTasks] = useState<number>(0)
  const [finishedTasks, setFinishedTasks] = useState<number>(0)
  return (
    <>
      <Header avatar={testUser.avatar}/>
      <Main activeTasks={activeTasks} setActiveTasks={setActiveTasks} finishedTasks={finishedTasks} setFinishedTasks={setFinishedTasks}/>
      <Footer name={testUser.name} year={testUser.year} activeTasks={activeTasks} finishedTasks={finishedTasks}/>
    </>

  );
}

export default App;
