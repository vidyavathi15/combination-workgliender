import './App.css';
import ForgotPassword from './components/ForgotPassword'

import LoginForm from './components/LoginForm'
// import ZonesCreationList from './components/ZonesCreationList'
import GliderScanIcons from './components/GliderScanIcons'
import {Route, Switch} from 'react-router-dom'
import AllZones from './components/AllZones/AllZones'
import Header from './components/Header'
import MenuIcons from './components/MenuIcons';
import MainHeader from './components/MainHeader';
import Profile from './components/Profile';

// import MiniDrawer from './components/MiniDrawer'
const App = () => {
  return (
    <div >
      
      {/* <AllZones /> */}
      {/* <Header /> */}
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/forgotPassword' >
        <ForgotPassword />
        </Route>
        <Route path='/GliderScans'>
        <GliderScanIcons />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/'>
        <MainHeader />
        </Route>
      </Switch>
      
      
      
      {/* <ZonesCreationList />  */}
      {/*   */}
      {/* <h1>&#x2133;</h1> */}
      
    </div>
  )
}


export default App;
