import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Community from "./components/Community"
import Blog from "./components/Blog"
import Abouthousee from"./components/Abouthousee"
import LoginPage from './components/LoginPage';
import FirstPage from './components/FirstPage';
import DashBoard from './components/DashBoard';
import SignupPage from './components/SignupPage';
import { useEffect } from 'react';


function App() {

  // const fetchFromAPI=async()=>{
  //     const requestOptions={
  //       "method" : "GET",
  //       headers: {
  //         'content-type': 'application/octet-stream',
  //         'X-RapidAPI-Key': '8f398bc350msh575b261e9215a8dp126ad8jsna90a9109e66a',
  //         'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  //       }
  //     }
  //     const Response=await fetch("https://airbnb19.p.rapidapi.com/api/v1/searchProperty/?8225",requestOptions)
  //     const data=await Response.json()
  //     console.log(data)
  //     if(!Response.ok){
  //       console.error(data)
  //     }
  // }

  // useEffect(() => {
  //   fetchFromAPI()
  // }, [])
  

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
