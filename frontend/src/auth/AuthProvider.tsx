import { ReactNode } from 'react'

import { KindeProvider } from '@kinde-oss/kinde-auth-react'

const clientId = import.meta.env.VITE_KINDE_CLIENT_ID
const domain = import.meta.env.VITE_KINDE_DOMAIN
const audience = import.meta.env.VITE_DOG_API_AUDIENCE

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <KindeProvider
            clientId={clientId}
            domain={domain}
            audience={audience}
            logoutUri={window.location.origin}
            redirectUri={window.location.origin}
            isDangerouslyUseLocalStorage={true}
        >
            {children}
        </KindeProvider>
    )
}
