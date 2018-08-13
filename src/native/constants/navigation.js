import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: Colors.toolbarDefaultBg },
    titleStyle: {
      color: Colors.toolbarTextColor,
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    navBarButtonColor: Colors.toolbarTextColor,
  },

  tabProps: {
    swipeEnabled: true,
    activeBackgroundColor: Colors.tabActiveBgColor,
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.footerDefaultBg },
  },

  icons: {
    style: { color: 'white' },
  },
};
