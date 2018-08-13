import React from 'react'
import { Body, Button, Card, CardItem, Container, Content, H2, Icon, Text } from 'native-base'
import { Col, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import Communications from 'react-native-communications'

const layout = [
  {
    header: 'Doctors',
    items: [
      {
        icon: 'search',
        text: 'Consult',
        onPress: () => Actions.doctors(),
      },
      {
        icon: 'calendar',
        text: 'Appointments',
        onPress: () => Actions.appointments(),
      },
      {
        icon: 'clock',
        text: 'History',
        onPress: () => Actions.appointments(),
      }
    ]
  },
  {
    header: 'Information',
    items: [
      {
        icon: 'medkit',
        text: 'First-Aid',
        onPress: () => Actions.jump('search'),
      },
      {
        icon: 'calendar',
        text: 'Medicines',
        onPress: () => Actions.jump('search'),
      },
      {
        icon: 'medical',
        text: 'Diseases',
        onPress: () => Actions.appointment({id: '5c50f2abeac61'}),
      }
    ]
  },
  {
    header: 'Emergency',
    items: [
      {
        icon: 'car',
        text: 'Ambulance',
        onPress: () => {
          Communications.textWithoutEncoding('112', `Ambulance required at geo:22.6,88.4 by Svaasth User Aditya Narayan (+918609283200). Tracking ID: 499924`)
        }
      },
      {
        icon: 'water',
        text: 'Blood Bank',
        onPress: () => {
          Communications.textWithoutEncoding('104', `Emergency blood required at geo:22.6, 88.4 by Svaasth User Aditya Narayan (+918609283200). Blood group: `)
        }
      }
    ]
  },
]

const Dashboard = () => (
  <Container>
    <Content padded>
      {layout.map(card => (
        <Card>
          <CardItem header>
            <H2>{card.header}</H2>
          </CardItem>
          <CardItem>
            <Grid>
              {card.items.map(button => (
                <Col>
                  <Body>
                    <Button transparent vertical onPress={button.onPress}>
                      <Icon active name={button.icon} style={{fontSize: 40}} />
                      <Text style={{ fontSize: 10 }}>{button.text}</Text>
                    </Button>
                  </Body>
                </Col>
              ))}
            </Grid>
          </CardItem>
        </Card>
      ))}
    </Content>
  </Container>
);

export default Dashboard;
