import { RoutesApp } from './routes/routes'
import { AuthProvider } from './contexts/authContexts/authContext'
import { GlobalStyle } from './styles/AppStyled'

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
    </>
  )
}

export default App
