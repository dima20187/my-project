import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { dashbordStyles } from '../../styles/DashbordScreenStyles';
import { IMAGES } from '../../../assets/index';
import { SwitchSection } from '../SwitchSection/SwitchSection';
import { clientData } from './mockValues';
import { loadSite } from '../../actions/siteActions';

const { DIAMOND } = IMAGES;
const VIP_CLIENT = 'VIP Клиент';
const USED = 'использовано';

function CouponeItem({ item: { title, couponeCode, couponeUsageStatus, expirationDate } }) {
  return (
    <View
      style={{
        marginBottom: 24,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          backgroundColor: '#F6F6F6',
          borderRadius: 7,
          marginTop: 4,
          paddingLeft: 10,
          paddingTop: 6,
          paddingBottom: 6,
          textDecorationLine: couponeUsageStatus ? 'line-through' : 'none',
        }}
      >
        {couponeCode}
      </Text>
      <Text
        style={{
          marginTop: 7,
          fontSize: 16,
          fontWeight: '400',
          textAlign: 'right',
          color: '#BDBDBD',
        }}
      >
        {couponeUsageStatus ? USED : expirationDate}
      </Text>
      <View
        style={{
          marginTop: 8,
          width: '100%',
          backgroundColor: '#E8E8E8',
          height: 1,
        }}
      />
    </View>
  );
}

function Dashbord({ navigation }) {
  const [selectedSection, SetSelectedSection] = useState(true);
  const { name, clientStatusVip, clientCoupenes, clientCars } = clientData;

  // const { filmState } = useSelector((state) => state);

  const { dashbordScreen: { filmState } } = useSelector((store) => store);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(loadSite());
    console.log(filmState);
  };

  return (
    <>
      <View style={{
        backgroundColor: '#5DB075',
        height: '35%',
      }}
      />
      {/* <Shadow style={styles.shadowProp}> */}
      <View style={{
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 100,
        // borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        top: '48%',
        left: '50%',
        // left: 'calc(50% - 150px)',
        transform: [{ translateX: -70 }, { translateY: -200 }],
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        elevation: 20,
      }}
      >
        <Image style={dashbordStyles.image} source={DIAMOND} />
      </View>
      {/* </Shadow> */}
      <View style={dashbordStyles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            // backgroundColor: 'red',
            // fontFamily: 'Inter',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
            }}
          >
            {name}
          </Text>
          {clientStatusVip && (
            <Text
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: '600',
                color: '#5DB075',
              }}
            >
              {VIP_CLIENT}
            </Text>
          )}
        </View>
        <SwitchSection
          selectedSection={selectedSection}
          SetSelectedSection={SetSelectedSection}
          onClickHandlerDispatch={onClickHandler}
        />
        {selectedSection ? (
          clientCoupenes.map((item, index) => (<CouponeItem item={item} id={index} />))
        ) : (
          // todo: update when whoud give sketch
          clientCars.map((item, index) => (<View id={index}><Text>{item.name}</Text></View>))
        )}
      </View>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   loadSite: (data) => dispatch(loadSite(data)),
// });

// export default connect(null, mapDispatchToProps)(Dashbord);

export default Dashbord;
