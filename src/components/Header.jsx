import React from 'react'
import { Calendar } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Calendar Dashboard</h1>
          <p className="text-gray-500 text-sm">Interactive calendar with data visualization</p>
        </div>
      </div>
    </header>
  )
}

export default Header
