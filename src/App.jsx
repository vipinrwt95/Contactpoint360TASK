import React from 'react'
import ModernCalendarDashboard from './components/ModernCalendarDashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-6">
            <ModernCalendarDashboard />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
