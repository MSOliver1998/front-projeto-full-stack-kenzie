import { useContext } from "react"
import { Outlet} from "react-router-dom"
import { AuthContext } from "../contexts/authContexts/authContext"

function ProtectedRoutes(){
    const {loading}=useContext(AuthContext)

    if(loading) {
        return <div>Carregando...</div>
    }

    return <Outlet/>
}

export {ProtectedRoutes}