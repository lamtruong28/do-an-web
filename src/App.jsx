import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Form/SignUp';
import SignIn from './components/Form/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './components/AdminPage';
import Container from './components/Container';


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' >
          <Route path='' element={<Container />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='admin' element={<AdminPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
