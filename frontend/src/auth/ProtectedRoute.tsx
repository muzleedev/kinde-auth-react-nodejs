import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

import { Loading } from 'src/components/Loading'
import { routes } from 'src/router/routes'

export const ProtectedRoute = () => {
    const { isLoading, isAuthenticated } = useKindeAuth()
    const location = useLocation()

    // TODO make this smoother for better UX
    if (isLoading) {
        return <Loading />
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={routes.home} state={{ from: location }} replace />
}
