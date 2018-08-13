import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getMemberData } from '../actions/member'

class Member extends React.Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    getMemberData: PropTypes.func.isRequired,
    member: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
  }

  componentDidMount = () => this.props.getMemberData();

  render = () => {
    const { Layout, member } = this.props;

    return <Layout member={member} />;
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  getMemberData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
