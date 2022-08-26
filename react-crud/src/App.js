import './App.css';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin';
import Details from './components/Details';
import Edit from './components/Edit';
import { EditLogin, EditLogout, LoggedInRoute, PrivateRoutes } from './components/protectedRoute';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<LoggedInRoute />}>
          <Route path='/' element={<Create />}></Route>
          <Route path='/login' element={<Admin />}></Route>
        </Route>

        <Route element={<PrivateRoutes />}>

          <Route element={<EditLogout/>}>
            <Route path="/details" element={<Details />}></Route>
          </Route>
          <Route element={<EditLogin/>}>
            <Route path='/edit' element={<Edit />}></Route>
          </Route>

        </Route>



      </Routes>
    </div>
  );
}

export default App;
