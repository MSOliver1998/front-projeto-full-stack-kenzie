import { RoutesApp } from './routes/routes'
import { AuthProvider } from './contexts/authContexts/authContext'
import { GlobalStyle } from './styles/AppStyled'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer/>
      <AuthProvider>
         <RoutesApp/>
      </AuthProvider>
    </>
  )
}

export default App
