import React from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { Body, Card, CardItem, Container, Content, Icon, Left, Right, Text, Thumbnail } from 'native-base'

const Appointment = ({
  error,
  loading,
  appointments,
  doctors,
  id,
}) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../images/male-avatar.jpg')} />
            </Left>
            <Body>
              <Text>Dr. Varun Chaturvedi</Text>
              <Text note>Physician</Text>
              <Text note>24th March 2018</Text>
            </Body>
            <Right>
              <Icon name='notifications' />
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Diagnosis: Viral Fever 104 degrees</Text>
              <Text>Prescriptions:</Text>
              <Text>Paracetamol - Twice daily for 5 days</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default Appointment
