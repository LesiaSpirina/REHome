import { useSelector } from "react-redux";
import { selectorAuth} from '../store/profile/selectors'
import { Outlet } from "react-router-dom";

export const PublicRoute = ({ component }) => {
    const isAuth = useSelector(selectorAuth);

    if(isAuth) {

    }

    return component ? component : <Outlet/>;
}