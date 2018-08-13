import { combineReducers } from 'redux'

import Store from '../store/appointments'

export const initialState = Store

export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_APPOINTMENT': {
      if (action.data) {
        return {
          error: null,
          loading: false,
          appointments: {
            byId: {
              ...state.appointments.byId,
              [action.data.appointmentId] : {
                doctorId: action.data.doctorId,
                date: action.data.date,
                time: action.data.time,
              },
            },
            allIds: state.appointments.allIds.concat(action.data.appointmentId)
          }
        }
      }
      return initialState
    }
    default:
      return state
  }
}
