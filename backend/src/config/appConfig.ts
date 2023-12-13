export const appConfig = {
    server: {
        port: process.env.PORT || '5000',
    },
    oAuth: {
        issuerBaseURL: process.env.OAUTH_ISSUER_BASE_URL || '',
        audience: process.env.OAUTH_AUDIENCE || '',
        tokenSigningAlg: process.env.OAUTH_TOKEN_SIGNING_ALG || '',
    },
}
