import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

export default function RoutesProvider() {
    const isAuthorized = false;

    const authorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<></>}>
                </Route>
            </>
        )
    );

    const unAuthorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<></>}>
                </Route>
            </>
        )
    );

    return <RouterProvider router={isAuthorized ? authorizedRouter : unAuthorizedRouter} />;
}