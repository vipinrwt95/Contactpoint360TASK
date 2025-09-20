import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {
  handleDateSelection,
  closeModal,
  changeView,
  navigateDate,
  setLoading,
  setError
} from '../store/slices/calendarSlice'
import {
  updateDateData,
  removeDateData,
  refreshData
} from '../store/slices/dataSlice'

export const useReduxCalendar = () => {
  const dispatch = useDispatch()
  
  // Selectors
  const selectedDate = useSelector(state => state.calendar.selectedDate)
  const showModal = useSelector(state => state.calendar.showModal)
  const selectedDateData = useSelector(state => state.calendar.selectedDateData)
  const currentView = useSelector(state => state.calendar.currentView)
  const currentDate = useSelector(state => state.calendar.currentDate)
  const isLoading = useSelector(state => state.calendar.isLoading)
  const error = useSelector(state => state.calendar.error)
  
  const calendarData = useSelector(state => state.data.calendarData)
  const lastUpdated = useSelector(state => state.data.lastUpdated)

  // Actions
  const handleDateSelectionAction = useCallback((date, data) => {
    dispatch(handleDateSelection({ date, data }))
  }, [dispatch])

  const closeModalAction = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])

  const changeViewAction = useCallback((view) => {
    dispatch(changeView(view))
  }, [dispatch])

  const navigateDateAction = useCallback((date) => {
    dispatch(navigateDate(date))
  }, [dispatch])

  const updateDateDataAction = useCallback((date, data) => {
    dispatch(updateDateData({ date, data }))
  }, [dispatch])

  const removeDateDataAction = useCallback((date) => {
    dispatch(removeDateData(date))
  }, [dispatch])

  const refreshDataAction = useCallback(() => {
    dispatch(refreshData())
  }, [dispatch])

  const setLoadingAction = useCallback((loading) => {
    dispatch(setLoading(loading))
  }, [dispatch])

  const setErrorAction = useCallback((error) => {
    dispatch(setError(error))
  }, [dispatch])

  return {
    // State
    selectedDate,
    showModal,
    selectedDateData,
    currentView,
    currentDate,
    isLoading,
    error,
    calendarData,
    lastUpdated,
    
    // Actions
    handleDateSelection: handleDateSelectionAction,
    closeModal: closeModalAction,
    changeView: changeViewAction,
    navigateDate: navigateDateAction,
    updateDateData: updateDateDataAction,
    removeDateData: removeDateDataAction,
    refreshData: refreshDataAction,
    setLoading: setLoadingAction,
    setError: setErrorAction
  }
}