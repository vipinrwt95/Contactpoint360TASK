import { createSlice } from '@reduxjs/toolkit'
import { dummyData } from '../../data/dummyData'

const initialState = {
  calendarData: dummyData,
  filteredData: null,
  isLoading: false,
  error: null,
  lastUpdated: new Date().toISOString()
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCalendarData: (state, action) => {
      state.calendarData = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    updateDateData: (state, action) => {
      const { date, data } = action.payload
      state.calendarData = {
        ...state.calendarData,
        [date]: data
      }
      state.lastUpdated = new Date().toISOString()
    },
    removeDateData: (state, action) => {
      const date = action.payload
      const newData = { ...state.calendarData }
      delete newData[date]
      state.calendarData = newData
      state.lastUpdated = new Date().toISOString()
    },
    refreshData: (state) => {
      state.lastUpdated = new Date().toISOString()
    }
  }
})

export const {
  setCalendarData,
  setFilteredData,
  setLoading,
  setError,
  updateDateData,
  removeDateData,
  refreshData
} = dataSlice.actions

export default dataSlice.reducer