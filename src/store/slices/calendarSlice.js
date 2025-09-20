import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedDate: null,
  showModal: false,
  selectedDateData: null,
  currentView: 'month',
  currentDate: new Date().toISOString(),
  isLoading: false,
  error: null
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
    setSelectedDateData: (state, action) => {
      state.selectedDateData = action.payload
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    handleDateSelection: (state, action) => {
      const { date, data } = action.payload
      state.selectedDate = date
      state.selectedDateData = data
      state.showModal = true
    },
    closeModal: (state) => {
      state.showModal = false
      state.selectedDate = null
      state.selectedDateData = null
    },
    changeView: (state, action) => {
      state.currentView = action.payload
    },
    navigateDate: (state, action) => {
      state.currentDate = action.payload
    }
  }
})

export const {
  setSelectedDate,
  setShowModal,
  setSelectedDateData,
  setCurrentView,
  setCurrentDate,
  setLoading,
  setError,
  handleDateSelection,
  closeModal,
  changeView,
  navigateDate
} = calendarSlice.actions

export default calendarSlice.reducer