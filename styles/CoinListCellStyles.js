import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default coinListCellStyles = StyleSheet.create({
  listCell: {
    backgroundColor: Colors.rkLightBlue,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    height: 80,
    marginBottom: 4
  },
  listCellImage: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  listCellInfo: {
    marginLeft: 20,
  },
  button: {
    width: 200,
    height: 20,
    backgroundColor: '#000'
  }
});
