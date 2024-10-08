import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Auth from "../modules/auth/Auth";
import Reg from "../modules/auth/Reg";
import Login from "../modules/auth/Login";
import Home from "../modules/user/home/Home";

export default function RoutesProvider() {
    const isAuthorized = false;

    const authorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="home" element={<Home />} />
                </Route>
            </>
        )
    );

    const unAuthorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="auth/" element={<Auth />}>
                        <Route path="reg" element={<Reg />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Route>
            </>
        )
    );

    return <RouterProvider router={isAuthorized ? authorizedRouter : unAuthorizedRouter} />;
}