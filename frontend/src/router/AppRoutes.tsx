import { Navigate, Route, Routes } from 'react-router-dom'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

import { routes } from 'src/router/routes'
import { Home } from 'src/page/Home'
import { Loading } from 'src/components/Loading'
import { ProtectedRoute } from 'src/auth/ProtectedRoute'
import { Profile } from 'src/page/Profile'
import { Dogs } from 'src/page/Dogs'

export const AppRoutes = () => {
    const { isLoading } = useKindeAuth()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />

            <Route path="" element={<ProtectedRoute />}>
                <Route path={routes.profile} element={<Profile />} />
                <Route path={routes.dogs} element={<Dogs />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
