// CryptoTable.jsx
import React, { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useCryptoData } from '../hooks/useCryptoData'
import { usePagination } from '../hooks/usePagination'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import { formatPrice } from '../utils/formatters'

const TableHeader = ({ children, ...props }) => (
    <th
        scope="col"
        className="px-6 py-3 text-xs font-bold text-black uppercase tracking-wider text-left"
        {...props}
    >
        {children}
    </th>
)

const NavigationButton = ({ children, isActive, ...props }) => (
    <button
        className={`
            flex items-center px-4 py-2 text-sm text-black font-bold
            transition-all duration-200 ease-in-out
            ${isActive ? 'border-2 border-yellow-400 rounded-md' : ""}
        `}
        {...props}
    >
        {children}
    </button>
)

const MobileSection = ({ label, value }) => (
    <div className="px-4 py-2">
        <div className="text-xs font-bold text-black uppercase tracking-wider">
            {label}
        </div>
        <div className="mt-1 text-sm text-gray-900">
            {value}
        </div>
    </div>
)

const CryptoTable = () => {
    const { data: coins, isLoading, error } = useCryptoData()
    const {
        paginatedData,
        goToNextPage,
        goToPreviousPage,
        currentPage,
        isLastPage,
    } = usePagination(coins)
    const [activeButton, setActiveButton] = useState("next")

    const handlePrevious = () => {
        goToPreviousPage()
        setActiveButton('previous')
    }

    const handleNext = () => {
        goToNextPage()
        setActiveButton('next')
    }

    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorMessage message={error.message} />

    const renderTotalSupply = (coin) => (
        <div className='flex items-baseline'>
            <div>{coin.tsupply}</div>
            <div className='ml-1'>{coin.symbol}</div>
        </div>
    )

    return (
        <div className="bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden">
            {/* Desktop view */}
            <div className="hidden md:block">
                <table className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <TableHeader>💰Coin</TableHeader>
                            <TableHeader>📄Code</TableHeader>
                            <TableHeader>🤑Price</TableHeader>
                            <TableHeader>📈Total Supply</TableHeader>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {paginatedData.map((coin, index) => (
                            <tr
                                key={coin.id}
                                className={`cursor-pointer transition-colors duration-150 
                                    ${index % 2 === 0 ? 'bg-gray-300/70 hover:bg-gray-300' : 'bg-white hover:bg-gray-50'}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {coin.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {coin.symbol}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {formatPrice(coin.price_usd)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {renderTotalSupply(coin)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
                {paginatedData.map((coin, index) => (
                    <div
                        key={coin.id}
                        className={`cursor-pointer transition-colors duration-150
                            ${index % 2 === 0 ? 'bg-gray-200 hover:bg-gray-300/70' : 'bg-white hover:bg-gray-50'}`}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <MobileSection
                                label="💰Coin"
                                value={coin.name}
                            />
                            <MobileSection
                                label="📄Code"
                                value={coin.symbol}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <MobileSection
                                label="🤑Price"
                                value={formatPrice(coin.price_usd)}
                            />
                            <div className="px-4 py-2">
                                <div className="text-xs font-bold text-black uppercase tracking-wider">
                                    📈Total Supply
                                </div>
                                <div className="mt-1">
                                    {renderTotalSupply(coin)}
                                </div>
                            </div>
                        </div>

                        {index !== paginatedData.length - 1 && (
                            <div className="border-b border-gray-200" />
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                {currentPage !== 1 && (
                    <NavigationButton
                        onClick={handlePrevious}
                        isActive={activeButton === 'previous'}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                    </NavigationButton>
                )}
                {!currentPage !== 1 && <div />}

                {!isLastPage && (
                    <NavigationButton
                        onClick={handleNext}
                        isActive={activeButton === 'next'}
                    >
                        Next
                        <ArrowRight className="w-4 h-4 mt-1 ml-2" />
                    </NavigationButton>
                )}
            </div>
        </div>
    )
}

export default CryptoTable