import {StyleSheet} from 'react-native';
import globalColors from './color';

const globalStyles = StyleSheet.create({
  body: {
    backgroundColor: globalColors.bodyColor,
  },
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: globalColors.primaryColor,
  },
  text: {
    color: globalColors.textColor,
  },
  button: {
    backgroundColor: globalColors.primaryColorLighter,
  },
  buttonText: {
    textAlign: 'center',
    color: globalColors.secondaryColorLighter,
  },
});

export default globalStyles;
