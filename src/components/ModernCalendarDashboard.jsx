import React from 'react'
import { Calendar } from 'lucide-react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ModernBarChartModal from './ModernBarChartModal'
import { useReduxCalendar } from '../hooks/useReduxCalendar'
import { processCalendarData, formatDateForAPI } from '../utils/dataProcessor'

// Custom toolbar component
const CustomToolbar = ({ label, onNavigate, onView, view, date }) => {
  const goToBack = () => {
    onNavigate('PREV')
  }

  const goToNext = () => {
    onNavigate('NEXT')
  }

  const goToToday = () => {
    onNavigate('TODAY')
  }

  const handleViewChange = (newView) => {
    onView(newView)
  }

  // Format label based on view
  const formatLabel = (label, view, currentDate) => {
    if (view === 'day') {
      // For day view, format as dd/mm/yyyy using the actual calendar date
      const momentDate = moment(currentDate)
      if (momentDate.isValid()) {
        return momentDate.format('DD/MM/YYYY')
      }
      return moment().format('DD/MM/YYYY')
    }
    return label
  }

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        {/* Show Today button only for day view */}
        {view === 'day' && (
          <button
            onClick={goToToday}
            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Today
          </button>
        )}
        <button
          onClick={goToBack}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Back
        </button>
        <button
          onClick={goToNext}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Next
        </button>
      </div>

      <div className="text-lg font-medium text-gray-900">
        {formatLabel(label, view, date)}
      </div>

      <div className="flex items-center space-x-1">
        {['month', 'week', 'day'].map((viewType) => (
          <button
            key={viewType}
            onClick={() => handleViewChange(viewType)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 capitalize ${
              view === viewType
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {viewType}
          </button>
        ))}
      </div>
    </div>
  )
}

const localizer = momentLocalizer(moment)

const ModernCalendarDashboard = () => {
  const {
    selectedDate,
    showModal,
    selectedDateData,
    currentView,
    currentDate,
    calendarData,
    handleDateSelection,
    closeModal,
    changeView,
    navigateDate
  } = useReduxCalendar()

  const events = processCalendarData(calendarData)

  const handleSelectEvent = (event) => {
    const dateStr = event.dateString
    handleDateSelection(dateStr, event.resource)
  }

  const handleSelectSlot = (slotInfo) => {
    // Don't allow slot selection in day view
    if (currentView === 'day') {
      return
    }
    
    const dateStr = formatDateForAPI(slotInfo.start)
    const dateData = calendarData[dateStr]
    
    // Only allow selection if there's valid data
    const hasValidData = dateData && 
      Array.isArray(dateData) && 
      dateData.length > 0 &&
      dateData.every(item => 
        item && 
        typeof item === 'object' && 
        Object.keys(item).length === 1 &&
        Object.values(item)[0] > 0
      )
    
    if (hasValidData) {
      handleDateSelection(dateStr, dateData)
    } else {
      handleDateSelection(dateStr, null)
    }
  }

  return (
    <div className="card p-6">
      {/* Calendar Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-5 h-5 text-gray-600" />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
          <p className="text-gray-500 text-sm">Click on dates to view data</p>
        </div>
      </div>

      {/* Calendar */}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onView={changeView}
        onNavigate={navigateDate}
        selectable
        views={['month', 'week', 'day']}
        view={currentView}
        date={currentDate}
        style={{ height: 600 }}
        components={{
          toolbar: CustomToolbar
        }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            fontSize: '12px',
            fontWeight: '500'
          }
        })}
        dayPropGetter={(date) => {
          const dateStr = formatDateForAPI(date)
          const dateData = calendarData[dateStr]
          
          // Only highlight if data exists and is valid
          const hasValidData = dateData && 
            Array.isArray(dateData) && 
            dateData.length > 0 &&
            dateData.every(item => 
              item && 
              typeof item === 'object' && 
              Object.keys(item).length === 1 &&
              Object.values(item)[0] > 0
            )
          
          return {
            style: {
              backgroundColor: hasValidData ? '#f0f9ff' : 'transparent'
            }
          }
        }}
        // Make time slots non-clickable in day view
        selectable={currentView !== 'day'}
      />

      {/* Modal */}
      {showModal && (
        <ModernBarChartModal
          date={selectedDate}
          data={selectedDateData}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default ModernCalendarDashboard