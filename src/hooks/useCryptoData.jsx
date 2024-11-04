// hooks/useCryptoData.js
import { useQuery } from '@tanstack/react-query'
import { fetchCryptoData } from '../api/cryptoApi'

export const useCryptoData = () => {
    return useQuery({
        queryKey: ['crypto'],
        queryFn: fetchCryptoData,
        refetchInterval: 1000 * 60, // Refetch every minute
    })
}