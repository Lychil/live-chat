import { AuthButton, AuthFormContent, AuthFormItem, AuthInput, AuthLabel } from "./styles";

export default function Reg() {
  return (
    <AuthFormContent>
      <AuthFormItem>
        <AuthLabel>Никнейм</AuthLabel>
        <AuthInput placeholder="Введите свой никнейм..."/>
      </AuthFormItem>

      <AuthFormItem>
        <AuthLabel>Пароль</AuthLabel>
        <AuthInput placeholder="Введите пароль..."/>
      </AuthFormItem>

      <AuthFormItem>
        <AuthLabel>Повторите пароль</AuthLabel>
        <AuthInput placeholder="Повторите пароль..."/>
      </AuthFormItem>

      <AuthButton>Зарегистрироваться</AuthButton>
    </AuthFormContent>
  )
}
