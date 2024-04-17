import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Sms = (props) => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
      <Path d="M313.231-526.103q14.692 0 25.038-10.346t10.346-25.038q0-14.692-10.346-25.038t-25.038-10.346q-14.949 0-25.167 10.346-10.218 10.346-10.218 25.038t10.218 25.038q10.218 10.346 25.167 10.346Zm168.256 0q14.692 0 25.038-10.346t10.346-25.038q0-14.692-10.346-25.038t-25.038-10.346q-14.692 0-25.038 10.346t-10.346 25.038q0 14.692 10.346 25.038t25.038 10.346Zm164.872 0q14.692 0 25.038-10.346t10.346-25.038q0-14.692-10.346-25.038t-25.038-10.346q-14.692 0-25.038 10.346t-10.346 25.038q0 14.692 10.346 25.038t25.038 10.346ZM100.001-118.464v-678.971q0-25.788 18.388-44.176t44.176-18.388h634.87q25.788 0 44.176 18.388t18.388 44.176v474.87q0 25.788-18.388 44.176t-44.176 18.388H241.539L100.001-118.464Zm119.795-191.792h577.639q4.616 0 8.462-3.847 3.847-3.846 3.847-8.462v-474.87q0-4.616-3.847-8.462-3.846-3.847-8.462-3.847h-634.87q-4.616 0-8.462 3.847-3.847 3.846-3.847 8.462v559.487l69.54-72.308Zm-69.54 0V-809.744v499.488Z" />
    </Svg>
  </View>
);

export default Sms;