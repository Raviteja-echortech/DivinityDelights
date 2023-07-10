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
    width: '35@s',
    height: '35@s',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '17@s',
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

  //progressbar
  customStyles: {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#3C4242',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#3C4242',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#3C4242',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#3C4242',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'black',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#3C4242',
  },
  nextBtn: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5@s',
    alignSelf: 'center',
    padding: '3%',
    marginTop: '2%',
  },
  nextTxt: {
    color: 'black',
    fontFamily: 'Rashkey',
  },
  progressBarContainer: {
    height: '80%',
    width: '90%',
    marginLeft: '10%',
  },

//shimmer
  shimmer: {
    overflow: 'hidden',
    backgroundColor: '#eee',
},
shimmer: {
  borderRadius: '6@s',
  overflow: 'hidden'
},
categoryShimmer: {
  width: '90%',
  alignSelf: 'center',
  marginTop: '2%',
  flexDirection: 'row'
},
shimmerHeading: {
  width: '50%',
  height: '50@s',
  alignSelf: 'center',
  marginTop: '5%'
},
shimmerCard: {
  width: '90%',
  height: '110@s',
  alignSelf: 'center',
  marginTop: '5%'
},
shimmer: {
  overflow: 'hidden',
  backgroundColor: '#eee',
},
});
