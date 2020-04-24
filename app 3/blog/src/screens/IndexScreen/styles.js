import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 2,
    paddingVertical: 15,
    paddingLeft: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAA',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 16
  },
  iconTrash: {
    fontSize: 24,
    color: '#e03616',
    paddingHorizontal: 10
  },
  iconPlus: {
    fontSize: 30,
    color: '#FFF',
    paddingHorizontal: 10
  }
});