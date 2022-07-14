
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Page404 from './components/Page404';

import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>

            <Route index element={<HomePage />}/>
            <Route path='*' element={<Page404/>} ></Route> 
            <Route path='/home' element={<HomePage/>} ></Route>
            <Route path='/home' element={<HomePage/>} ></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
