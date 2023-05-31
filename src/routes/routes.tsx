import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Register} from '../pages/register/register'
import { ProtectedRoutes } from './protectedRoutes';

function RoutesApp(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}> </Route>
            <Route path='register' element={<Register/>}></Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path='dashboard' element={<Dashboard/>} />
            </Route>
        </Routes>
    )
}

export {RoutesApp}