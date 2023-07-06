import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2', //#f2f2f2,
    paddingHorizontal: '10@s',
    paddingVertical: '5@s',
  },
  searchBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: '10@s',
    borderWidth: '1@s',
    backgroundColor: 'white',
    borderColor: '#D3D3D3',
    height: '40@s',
    width: '85%',
    borderRadius: '100@s',
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  searchBar: {
    width: '90%',
    paddingHorizontal: '20@s',
  },
  searchIcon: {
    width: '10%',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  hamberger: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackBtn: {
    width: '40@s',
    height: '40@s',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25@s',
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',

    elevation: '5@s',
  },
  headerParent: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '3%',
  },
  titleContent: {
    color: '#3C4242',
    fontFamily: 'Roboto-Bold',
    fontSize: '20@s',
    textAlign: 'center',
  },
  titleBox: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
