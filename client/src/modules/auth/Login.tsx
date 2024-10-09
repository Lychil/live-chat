import { AuthButton, AuthFormContent, AuthFormItem, AuthInput, AuthLabel } from "./styles";

export default function Login() {
    return (
        <AuthFormContent>
            <AuthFormItem>
                <AuthLabel>Никнейм</AuthLabel>
                <AuthInput placeholder="Введите свой никнейм..." />
            </AuthFormItem>

            <AuthFormItem>
                <AuthLabel>Пароль</AuthLabel>
                <AuthInput placeholder="Введите пароль..." />
            </AuthFormItem>

            <AuthButton>Войти</AuthButton>
        </AuthFormContent>
    )
}