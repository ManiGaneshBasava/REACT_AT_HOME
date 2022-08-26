import './App.css';
import Login from './components/Login';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Routes, Route } from "react-router-dom"
import { LoggedInRoute, ProtectedRoute } from './components/ProtectedRoute';
import Home from './components/Home';
import NewAccount from './components/NewAccount';


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          
          <Route element={<ProtectedRoute/>}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/newAccount' element={<NewAccount/>}></Route>
          </Route>

          <Route element={<LoggedInRoute/>}>
          <Route path='/' element={<Login />}></Route>
          </Route>

        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
