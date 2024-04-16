import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowForward = (props) => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
      <Path d="M684.155-454.873H180.001v-50.254h504.154L444.668-744.615 480-779.999 779.999-480 480-180.001l-35.332-35.384 239.487-239.488Z" />
    </Svg>
  </View>
);

export default ArrowForward;
