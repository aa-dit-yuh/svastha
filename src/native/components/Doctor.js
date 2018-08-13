import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import Communications from 'react-native-communications'
import { Actions } from 'react-native-router-flux'
import { Body, Button, Container, Content, Footer, FooterTab, H2, H3, Header, Icon, Left, List, ListItem, Right, Text, Thumbnail, View } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

import ErrorMessages from '../../constants/errors';
import Loading from './Loading'
import Error from './Error'

class Doctor extends React.Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {
    const date = `${datetime.getDay()}-${datetime.getMonth()}-${datetime.getFullYear()}`
    const time = `${datetime.getHours()}:${datetime.getMinutes()}`
    this.props.onBook(this.props.id, date, time)
    this._hideDateTimePicker()
    Actions.appointments()
  };

  render() {
    const { error, loading, doctors, onBook, id } = this.props
    if (loading) return <Loading />
    if (error) return <Error content={error} />

    let doctor = null
    if (id && doctors) {
      doctor = doctors.byId[id]
    }
    if (!doctor) return <Error content={ErrorMessages.doctor404} />

    return (
      <Container>
        <Image source={require('../../images/doctor-header.jpg')} style={{ height: 400, width: null, flex: 1 }}>
          <Header style={{ backgroundColor: 'transparent' }} noShadow>
            <Left>
              <Button transparent onPress={Actions.pop}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body/>
            <Right/>
          </Header>
        </Image>
        <View style={{ alignItems: 'center' }}>
          <Thumbnail large source={doctor.avatar} style={{ position: 'relative', top: -40 }} />
          <H2>{doctor.name}</H2>
          <H3>{doctor.speciality}</H3>
        </View>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Icon name='clock' />
              </Left>
              <Body>
                <Text>11:00 AM - 02:00 PM</Text>
                <Text>04:00 PM - 08:00 PM</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name='pin' />
              </Left>
              <Body>
                <Text>{doctor.clinic}</Text>
                <Text>{doctor.location}</Text>
              </Body>
            </ListItem>
          </List>
          <DateTimePicker
            mode='datetime'
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active
              onPress={this._showDateTimePicker}
            >
              <Icon name='card' />
              <Text>Book</Text>
            </Button>
            <Button vertical active onPress={() => Communications.phonecall(doctor.phone, true)}>
              <Icon name='call' />
              <Text>Call</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default Doctor
