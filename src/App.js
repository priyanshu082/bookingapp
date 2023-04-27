import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Community from "./components/Community"
import Blog from "./components/Blog"
import Abouthousee from"./components/Abouthousee"
import LoginPage from './components/LoginPage';
import FirstPage from './components/FirstPage';
import DashBoard from './components/DashBoard';
import SignupPage from './components/SignupPage';


function App() {
  return (

    <div class="">
      <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<DashBoard/>}/>
      {/* <Route path='/' exact element={<FirstPage/>}/> */}
      <Route path='/loginpage' exact element={<LoginPage/>}/>
      <Route path='/signuppage' exact element={<SignupPage/>}/>
      <Route path='/community' exact element={<Community/>}/>
      <Route path='/blog' exact element={<Blog/>}/>
      <Route path='/about' exact element={<Abouthousee/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
