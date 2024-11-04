// App.jsx
import React from 'react'
import CryptoTable from './components/CryptoTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Crypto Tracker
          </h1>
        </div>
      </header>
      <main className="p-4">
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
          <CryptoTable />
        </div>
      </main>
    </div>
  )
}

export default App