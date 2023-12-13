import { BrowserRouter } from 'react-router-dom'

import 'src/styles/App.css'
import { AuthProvider } from 'src/auth/AuthProvider'
import { AppRoutes } from 'src/router/AppRoutes'

export const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}
