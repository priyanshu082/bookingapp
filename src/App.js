import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Body from './components/Loginpage';
import Community from "./components/Community"
import Blog from "./components/Blog"
import Abouthousee from"./components/Abouthousee"

function App() {
  return (
   <BrowserRouter>
    <Box>
      <Navbar/>
    </Box>
    <Routes>
      <Route path='/' exact element={<Body/>}/>
      <Route path='/community' exact element={<Community/>}/>
      <Route path='/blog' exact element={<Blog/>}/>
      <Route path='/abouthousee' exact element={<Abouthousee/>}/>
      
    </Routes>
   </BrowserRouter>
   
  );
}

export default App;
