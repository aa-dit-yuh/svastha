import React from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Body, Container, Content, Icon, Left, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Profile = ({ member }) => (
  <Container>
    <Content>
      <List>
        {(member && member.email) ?
          <View>
            <Content padder>
              <Header
                title={`Hi ${member.firstName},`}
                content={`You are currently logged in as ${member.email}`}
              />
            </Content>

            <ListItem itemDivider>
              <Text>My Account</Text>
            </ListItem>
            <ListItem onPress={Actions.updateProfile} icon>
              <Left><Icon name='person' /></Left>
              <Body><Text>My Profile</Text></Body>
            </ListItem>
            <ListItem onPress={Actions.appointments} icon>
              <Left><Icon name='calendar' /></Left>
              <Body><Text>My Appointments</Text></Body>
            </ListItem>
            <ListItem onPress={() => Actions.appointment()} icon>
              <Left><Icon name='folder' /></Left>
              <Body><Text>My Medical Records</Text></Body>
            </ListItem>
            <ListItem onPress={Actions.doctors} icon>
              <Left><Icon name='people' /></Left>
              <Body><Text>My Doctors</Text></Body>
            </ListItem>
          </View>
        :
          <View>
            <Content padder>
              <Header
                title="Hi there,"
                content="Please login to gain extra access"
              />
            </Content>

            <ListItem onPress={Actions.login} icon>
              <Left><Icon name='log-in' /></Left>
              <Body><Text>Login</Text></Body>
            </ListItem>
            <ListItem onPress={Actions.signUp} icon>
              <Left><Icon name='person-add' /></Left>
              <Body><Text>Sign Up</Text></Body>
            </ListItem>
            <ListItem onPress={Actions.forgotPassword} icon>
              <Left><Icon name='help-buoy' /></Left>
              <Body><Text>Forgot Password</Text></Body>
            </ListItem>
          </View>
        }

        <ListItem itemDivider>
          <Text>Support</Text>
        </ListItem>
        <ListItem icon>
          <Left><Text>अ</Text></Left>
          <Body><Text>Change Language</Text></Body>
        </ListItem>        
        <ListItem onPress={() => BackHandler.exitApp()} icon>
          <Left><Icon name='exit' /></Left>
          <Body><Text>Exit</Text></Body>
        </ListItem>
      </List>
    </Content>
  </Container>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
