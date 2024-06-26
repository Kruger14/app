import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Localparking = (props) => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
      <Path d="M260.001-140.001v-679.998h263.794q90.333 0 153.268 62.936 62.936 62.935 62.936 153.268 0 90.076-62.936 153.012-62.935 62.935-153.268 62.935H360.511v247.847h-100.51Zm100.51-348.356h164.412q48.686 0 82.19-33.504t33.504-81.934q0-48.686-33.504-82.19t-82.19-33.504H360.511v231.132Z" />
    </Svg>
  </View>
);

export default Localparking;
