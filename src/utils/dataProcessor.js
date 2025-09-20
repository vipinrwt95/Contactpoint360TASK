import moment from 'moment'

// Validation function for individual data entry
const validateDataEntry = (entry) => {
  // Check if entry is an object
  if (!entry || typeof entry !== 'object') {
    return false
  }
  
  const keys = Object.keys(entry)
  // Check if entry has exactly one key
  if (keys.length !== 1) {
    return false
  }
  
  const key = keys[0]
  const value = entry[key]
  
  // Check if key is a valid user format (user_1, user_2, etc.)
  if (!/^user_\d+$/.test(key)) {
    return false
  }
  
  // Check if value is a positive number
  if (typeof value !== 'number' || value < 0 || !isFinite(value)) {
    return false
  }
  
  return true
}

// Validation function for date data array
const validateDateData = (dateData) => {
  // Check if it's an array
  if (!Array.isArray(dateData)) {
    return false
  }
  
  // Check if array is empty
  if (dateData.length === 0) {
    return false
  }
  
  // Check if all entries are valid
  return dateData.every(validateDataEntry)
}

// Validation function for date string
const validateDateString = (dateStr) => {
  // Check if date string matches DD-MM-YYYY format
  if (!/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
    return false
  }
  
  // Check if it's a valid date
  const date = moment(dateStr, 'DD-MM-YYYY', true)
  return date.isValid()
}

export const processCalendarData = (dummyData) => {
  if (!dummyData || typeof dummyData !== 'object') {
    console.warn('Invalid dummy data provided')
    return []
  }
  
  const validEvents = []
  
  Object.keys(dummyData).forEach(dateStr => {
    // Validate date string
    if (!validateDateString(dateStr)) {
      console.warn(`Invalid date format: ${dateStr}`)
      return
    }
    
    const dateData = dummyData[dateStr]
    
    // Validate date data
    if (!validateDateData(dateData)) {
      console.warn(`Invalid data for date ${dateStr}:`, dateData)
      return
    }
    
    try {
      const dateObj = moment(dateStr, 'DD-MM-YYYY').toDate()
      const dataCount = dateData.length
      const totalValue = dateData.reduce((sum, item) => {
        const value = Object.values(item)[0]
        return sum + (typeof value === 'number' ? value : 0)
      }, 0)
      
      validEvents.push({
        title: `${dataCount} entries (Total: ${totalValue})`,
        start: dateObj,
        end: dateObj,
        allDay: true,
        resource: dateData,
        dateString: dateStr
      })
    } catch (error) {
      console.warn(`Error processing date ${dateStr}:`, error)
    }
  })
  
  return validEvents
}

export const formatDateForDisplay = (dateStr) => {
  return moment(dateStr, 'DD-MM-YYYY').format('MMMM DD, YYYY')
}

export const formatDateForAPI = (date) => {
  return moment(date).format('DD-MM-YYYY')
}

export const convertDataForChart = (data) => {
  // Validate input data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return []
  }
  
  const validChartData = []
  
  data.forEach((item, index) => {
    // Validate each item
    if (!item || typeof item !== 'object') {
      console.warn(`Invalid chart data item at index ${index}:`, item)
      return
    }
    
    const keys = Object.keys(item)
    if (keys.length !== 1) {
      console.warn(`Invalid chart data item at index ${index}: should have exactly one key`, item)
      return
    }
    
    const key = keys[0]
    const value = item[key]
    
    // Validate key format
    if (!/^user_\d+$/.test(key)) {
      console.warn(`Invalid user key format at index ${index}: ${key}`)
      return
    }
    
    // Validate value
    if (typeof value !== 'number' || value < 0 || !isFinite(value)) {
      console.warn(`Invalid value at index ${index}: ${value}`)
      return
    }
    
    validChartData.push({
      user: key,
      value: value,
      fill: getColorForIndex(validChartData.length)
    })
  })
  
  return validChartData
}

const getColorForIndex = (index) => {
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
  return colors[index % colors.length]
}