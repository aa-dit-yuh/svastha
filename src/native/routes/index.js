import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import DashboardComponent from '../components/Dashboard'

import SearchContainer from '../../containers/Search'
import SearchComponent from '../components/Search'

import DoctorsContainer from '../../containers/Doctors'
import DoctorsComponent from '../components/Doctors'
import DoctorViewComponent from '../components/Doctor'

import AppointmentsContainer from '../../containers/Appointments'
import AppointmentsComponent from '../components/Appointments'
import AppointmentsViewComponent from '../components/Appointment'

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        type="replace"
        tabBarPosition="bottom"
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title="HOME"
          icon={() => <Icon name="home" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key='home' component={DashboardComponent} />

          <Scene key='doctors' component={DoctorsContainer} Layout={DoctorsComponent} title='SEARCH' hideTabBar />
          <Scene key='doctor' component={DoctorsContainer} Layout={DoctorViewComponent} modal hideNavBar hideTabBar />

          <Scene key='appointments' component={AppointmentsContainer} Layout={AppointmentsComponent} title='MY APPOINTMENTS' hideTabBar />
          <Scene key='appointment' component={AppointmentsContainer} Layout={AppointmentsViewComponent} hideTabBar />
        </Stack>

        <Stack
          key="search"
          title="READ"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key='search' component={SearchContainer} Layout={SearchComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
