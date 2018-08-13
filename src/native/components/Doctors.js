import React from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { Body, Button, Card, CardItem, Container, Content, Header, Icon, Input, Item, Left, Right, Text, Thumbnail } from 'native-base'

import Colors from '../../../native-base-theme/variables/commonColor'
import Loading from './Loading'
import Error from './Error'

class DoctorListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filteredDoctorIds: this.props.doctors.allIds,
    }
  }

  onSearch = (searchTerm) => {
    const { doctors } = this.props
    const filteredDoctorIds = doctors.allIds.filter(id => {
      return (
        doctors.byId[id].name + 
        doctors.byId[id].speciality +
        doctors.byId[id].location
      ).toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({ searchTerm, filteredDoctorIds})
  }

  render = () => {
    const { error, loading, doctors } = this.props

    if (loading) return <Loading />
    if (error) return <Error content={error} />

    return (
      <Container>
        <Header searchBar rounded noShadow>
          <Item>
            <Icon name='search' />
            <Input placeholder='Search by name, speciality and location' onChangeText={this.onSearch} />
          </Item>
        </Header>
        <Content>
          {this.state.filteredDoctorIds.map(id => (
            <Card key={id}>
              <CardItem>
                <Left>
                  <Thumbnail source={doctors.byId[id].avatar} />
                  <Body>
                    <Text>{doctors.byId[id].name}</Text>
                    <Text note>{doctors.byId[id].speciality}</Text>
                    <Text note><Icon name='pin' style={{fontSize: Colors.iconSizeSmall}} />  {doctors.byId[id].location}</Text>
                  </Body>
                </Left>
                <Right>
                  <Button iconRight small transparent>
                    <Text>{doctors.byId[id].rating}%</Text>
                    <Icon name='thumbs-up' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Rs {doctors.byId[id].charges}  {doctors.byId[id].reviews} reviews</Text>
                </Left>
                <Right>
                  <Button iconRight small onPress={() => Actions.doctor({ id: id })}>
                    <Text>Book</Text>
                    <Icon name='arrow-dropright' />
                  </Button>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    )
  }
};

DoctorListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  doctors: PropTypes.shape({
    byId: PropTypes.shape({}).isRequired,
    allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

DoctorListing.defaultProps = {
  error: null,
}

export default DoctorListing