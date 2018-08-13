export function createAppointment(doctorId, date, time) {
  const appointmentId = Math.random().toString(16).slice(2)

  return {
    type: 'CREATE_APPOINTMENT',
    data: {
      appointmentId,
      doctorId,
      date,
      time,
    }
  }
}
