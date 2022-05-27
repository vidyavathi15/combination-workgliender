import './App.css';
import ForgotPassword from './components/ForgotPassword'

import LoginForm from './components/LoginForm'
// import ZonesCreationList from './components/ZonesCreationList'
import GliderScanIcons from './components/GliderScanIcons'
import { Route, Switch } from 'react-router-dom'
import AllZones from './components/AllZones/AllZones'
import Header from './components/LoginHeader'
import Sidebar from './components/Sidebar';
import MainHeader from './components/MainHeader';
import Profile from './components/Profile';
import Attendence from './components/Attendence';

// import MiniDrawer from './components/MiniDrawer'
const App = () => {
  return (
    <div >


      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/allzones'>
          <AllZones />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/attendence'>
          <Attendence />
        </Route>
        {/* <Route path='/allzones'> */}
        {/* </Route> */}
        {/* </Switch> */}

        {/* <AllZones /> */}
        {/* <Header /> */}
        {/* <Switch>
        <Route path='/'>
          <LoginForm />
        </Route> */}
        {/* <Route path='/forgotPassword' >
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
        </Route> */}
      </Switch>



      {/* <ZonesCreationList />  */}
      {/*   */}
      {/* <h1>&#x2133;</h1> */}

    </div>
  )
}


export default App;