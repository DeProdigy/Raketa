import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 50,
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
});
