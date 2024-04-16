import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ArrowBack = (props) => {

  return (
    <View>
      <Svg height={props.height} viewBox="0 -960 960 960" width={props.width}>
        <Path d="M400-93.847 13.847-480 400-866.153l49.589 49.999L113.178-480l336.411 336.154L400-93.847Z" />
      </Svg>
    </View>
  );
};

export default ArrowBack;
