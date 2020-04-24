import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#888'
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#AAA',
    paddingHorizontal: 5,
    marginBottom: 20,
    backgroundColor: '#FFF'
  },
  textArea: {
    textAlign: 'justify',
    textAlignVertical: 'top',
  },
  buttonContainer: {
    backgroundColor: '#3066be',
    width: '100%',
    height: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  button: {
    fontSize: 18,
    color: '#FFF'
  }
});