import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const TopNavBar = props => {
  const {hideBack, hideProfile, onPress} = props;
console.log('hideBack',hideBack)
  return (
    <View style={styles.wrapper}>
      {!hideBack? (
        <View style={styles.backButton}>
          <TouchableOpacity onPress={onPress}>
            <Ionicons
              name="caret-back-circle"
              type="MaterialIcons"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ) : null}
      {/* <View style={styles.profileWrapper}>
        <View style={styles.profileImage}> 
     </View>
    </View> */}
    </View>
  );
};

TopNavBar.propTypes = {
  hideBack: PropTypes.bool,
  hideProfile: PropTypes.bool,
  onPress: PropTypes.func,
};
TopNavBar.defaultProps = {
  hideBack: false,
  hideProfile: false,
  onPress: () => {},
};

const styles = StyleSheet.create({
  wrapper: {
    height: 75,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButton: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  profileWrapper: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  profileImage: {
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },
});

export default TopNavBar;
