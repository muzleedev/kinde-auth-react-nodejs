import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

export const LogoutButton = () => {
    const { logout } = useKindeAuth()

    return <button onClick={() => logout()}>Log Out</button>
}
