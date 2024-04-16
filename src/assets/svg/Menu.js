import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Menu = (props) => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
      <Path d="M140.001-254.616v-50.255h679.998v50.255H140.001Zm0-200.257v-50.254h679.998v50.254H140.001Zm0-200.256v-50.255h679.998v50.255H140.001Z" />
    </Svg>
  </View>
);

export default Menu;
