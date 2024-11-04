const API_BASE_URL = 'https://api.coinlore.net/api'

export const fetchCryptoData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/tickers/`)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch cryptocurrency data')
        }

        return data.data
    } catch (error) {
        throw new Error('Failed to fetch cryptocurrency data: ' + error.message)
    }
}