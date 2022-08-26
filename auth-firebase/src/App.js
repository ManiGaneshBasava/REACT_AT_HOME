import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import {LoggedInRoute, ProtectedRoute} from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>

          <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }/>
          <Route element={<LoggedInRoute/>}>
          <Route path='/signup' element={<Signup />} />
          <Route path="/" element={<Login />} />
          </Route>
          
 

        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
