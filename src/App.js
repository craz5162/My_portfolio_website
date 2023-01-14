import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Abouts from './Components/Abouts/Abouts';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {path : "/", element : <Headers></Headers>, children : [
      {path: "/", element: <Home></Home>},
      {path : "/home", element : <Home></Home>},
      {path : "/about", element : <Abouts></Abouts>},
      {path : "/education", element : <Education></Education>},
      {path: "/skills", element :<Skills></Skills>},
      {path : "/Contact", element : <Contact></Contact>},
      {path: "/project", element : <Project></Project>}
    ]},
    {path: "*", element : <Error></Error>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
