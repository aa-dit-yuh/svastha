import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AppointmentListing extends React.Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    appointments: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool.isRequired,
      appointments: PropTypes.shape({
        byId: PropTypes.shape({}).isRequired,
        allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    doctors: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool.isRequired,
      doctors: PropTypes.shape({
        byId: PropTypes.shape({}).isRequired,
        allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    id: PropTypes.string,
  }

  render () {
    const { Layout, appointments, doctors, id } = this.props;

    return (
      <Layout
        error={appointments.error}
        loading={appointments.loading}
        appointments={appointments.appointments}
        doctors={doctors.doctors}
        id={id}
      />
    )
  }
}

const mapStateToProps = state => ({
  appointments: state.appointments || {},
  doctors: state.doctors || {},
})

export default connect(mapStateToProps)(AppointmentListing)
