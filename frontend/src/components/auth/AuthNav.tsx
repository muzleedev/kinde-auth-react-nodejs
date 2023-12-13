import React from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

import { LoginButton } from 'src/components/auth/LoginButton'
import { LogoutButton } from 'src/components/auth/LogoutButton'
import { SignupButton } from 'src/components/auth/SignupButton'

export const AuthNav: React.FC = () => {
    const { isAuthenticated } = useKindeAuth()

    return (
        <div className="auth-nav">
            {!isAuthenticated && (
                <div className="nav-buttons">
                    <LoginButton />
                    <SignupButton />
                </div>
            )}
            {isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    )
}
