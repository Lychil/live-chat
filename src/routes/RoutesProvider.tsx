import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
import Auth from "../modules/auth/Auth";
import Reg from "../modules/auth/Reg";
import Login from "../modules/auth/Login";
import Home from "../modules/user/home/Home";

export default function RoutesProvider() {
    const isAuthorized = true;

    const authorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Outlet />}>
                    <Route path="home" element={<Home />} />
                    <Route path="*" element={<Navigate to="home" />} />
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
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={isAuthorized ? authorizedRouter : unAuthorizedRouter} />;
}