import { useState, useMemo } from 'react'

export const usePagination = (data = [], itemsPerPage = 10) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = useMemo(() =>
        Math.ceil(data.length / itemsPerPage),
        [data.length, itemsPerPage]
    )

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return data.slice(startIndex, endIndex)
    }, [data, currentPage, itemsPerPage])

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }

    return {
        currentPage,
        totalPages,
        paginatedData,
        goToNextPage,
        goToPreviousPage,
        startIndex: (currentPage - 1) * itemsPerPage,
        endIndex: Math.min(currentPage * itemsPerPage, data.length),
    }
}