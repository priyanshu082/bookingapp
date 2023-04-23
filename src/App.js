import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Community from "./components/Community"
import Blog from "./components/Blog"
import Abouthousee from"./components/Abouthousee"
import SecondPage from './components/SecondPage';
import FirstPage from './components/FirstPage';
import DashBoard from './components/DashBoard';


function App() {
  return (

    <div class="main-page h-[850px]">
      <Box>
      <Navbar/>
    </Box>
      <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<FirstPage/>}/>
      <Route path='/secondpage' exact element={<SecondPage/>}/>
      <Route path='dashboard' exact element={<DashBoard/>}/>
      <Route path='/community' exact element={<Community/>}/>
      <Route path='/blog' exact element={<Blog/>}/>
      <Route path='/about' exact element={<Abouthousee/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
