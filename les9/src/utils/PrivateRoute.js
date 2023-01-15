import { useSelector } from "react-redux";
import { selectorAuth} from '../store/profile/selectors'
import { Outlet, Navigate } from "react-router-dom";


export const PrivateRoute = ({ component }) => {
    const isAuth = useSelector(selectorAuth);

    if(!isAuth) {

        return <Navigate to='/signin'/>
    }

    return component ? component : <Outlet/>;
}