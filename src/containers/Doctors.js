import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { createAppointment } from '../actions/appointments'

class DoctorListing extends React.Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    doctors: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool.isRequired,
      doctors: PropTypes.shape({
        byId: PropTypes.shape({}).isRequired,
        allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    onBook: PropTypes.func,
    id: PropTypes.string,
  }

  render = () => {
    const { Layout, doctors, onBook, id } = this.props;

    return (
      <Layout
        error={doctors.error}
        loading={doctors.loading}
        doctors={doctors.doctors}
        onBook={onBook}
        id={id}
      />
    )
  }
}

const mapStateToProps = state => ({
  doctors: state.doctors || {},
})

const mapDispatchToProps = {
  onBook: createAppointment,
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorListing)
