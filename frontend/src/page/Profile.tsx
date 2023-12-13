import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

import { PageLayout } from 'src/components/Layout'

export const Profile = () => {
    const { user } = useKindeAuth()

    return (
        <PageLayout>
            <h2>Profile</h2>
            <div style={{ textAlign: 'start' }}>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </PageLayout>
    )
}
