import{Routes, Route, Link} from "react-router-dom"
import Homepage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const App = ()=>{
  return(
    <div>
      <nav className="bg-gray-800"> 
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white text-2xl front-bold">CRUD-API(USING REACT)</h2></Link>  
        </div> 
      </nav>


      <div className="container mx-auto p-2 h-full">
          <Routes>
            <Route index element= {<Homepage/>}></Route>
            <Route path="/create" element={<CreatePage/>}></Route>
            <Route path="/edit/:id" element={<EditPage/>}></Route>
          </Routes>
      
        </div>
        <ToastContainer />

      </div>
  );
}

export default App;

