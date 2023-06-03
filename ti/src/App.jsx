import LoginForm from './components/loginForm';
import Home from './components/home';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <ToastContainer />
      <div>
        {
          !user.length > 0 ? (
            <LoginForm setUser={setUser} />
          ) : (
            <Home user={user} setUser={setUser} />
          )}
      </div>
    </div>
  );
}

export default App;
