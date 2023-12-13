import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

export const LoginButton = () => {
    const { login } = useKindeAuth()

    return <button onClick={() => login()}>Log In</button>
}
