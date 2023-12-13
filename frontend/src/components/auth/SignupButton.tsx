import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

export const SignupButton = () => {
    const { register } = useKindeAuth()

    return <button onClick={() => register()}>Sign up</button>
}
