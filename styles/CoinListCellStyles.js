import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default coinListCellStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.raketaBackgroundBlue,
  },
    listCell: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    width: '100%',
    height: 80,
    padding: 20,
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
