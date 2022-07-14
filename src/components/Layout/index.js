

import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

import SearchAppBar from '../Search';
import NewsList from '../NewsList';
import Header from '../Header';

const Layout = () => {
  return <>
      <div className='App'>
        
          <Header></Header>
          <Sidebar />
          <SearchAppBar />
          <div className='page'>

            {/* <NewsList></NewsList> */}
            
            <Outlet />

          </div>

      </div>
    </>

}

export default Layout;