import { useInput } from "../../common/hooks/useInput";
import { useCreateUserMutation } from "../../store/reducers/user/userApi";
import { AuthButton, AuthFormContent, AuthFormItem, AuthInput, AuthLabel } from "./styles";

export default function Reg() {
  const [createUser] = useCreateUserMutation();
  const name = useInput();
  const password = useInput();
  const rPassword = useInput();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    createUser({ name: name.value, password: password.value }).then(res => {
      if (res.error && 'data' in res.error) {
        const error = res.error.data as { error: string };
        console.log(error);
      }
    })
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

      <AuthFormItem>
        <AuthLabel>Повторите пароль</AuthLabel>
        <AuthInput value={rPassword.value} onChange={rPassword.change} placeholder="Повторите пароль..." />
      </AuthFormItem>

      <AuthButton onClick={handleSubmit}>Зарегистрироваться</AuthButton>
    </AuthFormContent>
  )
}
