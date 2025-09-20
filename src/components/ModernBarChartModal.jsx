import React from 'react'
import { X, BarChart3, Calendar } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { formatDateForDisplay, convertDataForChart } from '../utils/dataProcessor'

const ModernBarChartModal = ({ date, data, onClose }) => {
  const chartData = convertDataForChart(data)

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Data Analysis</h2>
            <p className="text-gray-500 text-sm">{formatDateForDisplay(date)}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {data && data.length > 0 ? (
            <div>
              {/* Bar Chart */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-medium text-gray-900">Data Distribution</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="user" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        color: '#374151'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      radius={[4, 4, 0, 0]}
                      fill="#2563eb"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
              <p className="text-gray-500">No data found for the selected date.</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModernBarChartModal
