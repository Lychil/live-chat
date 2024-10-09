import { Outlet } from "react-router-dom";
import AuthSwaper from "./components/AuthSwaper";
import { AuthForm, AuthWrapper } from "./styles";

export default function Auth() {
    return (
        <AuthWrapper>
            <AuthForm>
                <AuthSwaper />
                <Outlet />
            </AuthForm>
        </AuthWrapper>
    )
}
