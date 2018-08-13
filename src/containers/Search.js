import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Search extends React.Component {
  render = () => {
    const { Layout, firstaid } = this.props;

    return (
      <Layout
        firstaid={firstaid}
      />
    )
  }
}

const mapStateToProps = state => ({
  firstaid: state.firstaid || {},
})

export default connect(mapStateToProps)(Search)
