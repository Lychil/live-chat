import { useInput } from "../../common/hooks/useInput";
import { useLoginMutation } from "../../store/reducers/user/userApi";
import { AuthButton, AuthFormContent, AuthFormItem, AuthInput, AuthLabel } from "./styles";

export default function Login() {
    const [login] = useLoginMutation();
    const name = useInput('');
    const password = useInput('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const response = await login({ name: name.value, password: password.value }).then(res => res);
        if (response.error && 'data' in response.error) {
            // ToDo
            // const error = response.error.data as { error: string };
        }
    }

    return (
        <AuthFormContent>
            <AuthFormItem>
                <AuthLabel>Никнейм</AuthLabel>
                <AuthInput value={name.value} onChange={name.change} placeholder="Введите свой никнейм..." />
            </AuthFormItem>

            <AuthFormItem>
                <AuthLabel>Пароль</AuthLabel>
                <AuthInput value={password.value} onChange={password.change} placeholder="Введите пароль..." />
            </AuthFormItem>

            <AuthButton onClick={handleSubmit}>Войти</AuthButton>
        </AuthFormContent>
    )
}