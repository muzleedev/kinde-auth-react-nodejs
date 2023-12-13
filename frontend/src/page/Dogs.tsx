import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import { useEffect, useState } from 'react'

import { PageLayout } from 'src/components/Layout'
import { getDogs } from 'src/api/api'
import { LoadingContainer } from 'src/components/LoadingContainer'

export const Dogs = () => {
    const [dogs, setDogs] = useState()
    const [isFetching, setIsFetching] = useState(true)
    const { getToken } = useKindeAuth()

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const accessToken = await getToken()
                const dogs = await getDogs(accessToken || '')
                setDogs(dogs)
            } catch (e) {
                console.error(e)
            } finally {
                setIsFetching(false)
            }
        }

        fetchDogs()
    }, [getToken])

    return (
        <PageLayout>
            <LoadingContainer isLoading={isFetching}>
                <h2>Dogs</h2>
                <div style={{ textAlign: 'start' }}>
                    <pre>{JSON.stringify(dogs, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
