import { RoutesApp } from './routes/routes'
import { AuthProvider } from './contexts/authContexts/authContext'
import { GlobalStyle } from './styles/AppStyled'
import { ModalProvider } from './contexts/modalContext/modalContext'

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <ModalProvider>
         <RoutesApp/>
        </ModalProvider>
      </AuthProvider>
    </>
  )
}

export default App
