import React from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { Body, Card, CardItem, Container, Content, Left, Right, Text, Thumbnail } from 'native-base'

class AppointmentListing extends React.Component {
  render() {
    const { error, loading, appointments, doctors } = this.props

    return (
      <Container>
        <Content>
          {appointments.allIds.map(id => {
            const appointment = appointments.byId[id]
            const doctor = doctors.byId[appointment.doctorId]

            return (
              <Card key={id} onPress={() => Actions.appointment({id: id})}>
                <CardItem>
                  <Left>
                    <Thumbnail source={doctor.avatar} onPress={() => Actions.appointment({id: id})} />
                  </Left>
                  <Body>
                    <Text>{doctor.name}</Text>
                    <Text note>{doctor.speciality}</Text>
                    <Text note>{appointment.date} {appointment.time}</Text>
                  </Body>
                  <Right />
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </Container>
    )
  }
}

export default AppointmentListing
