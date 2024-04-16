import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Close = (props) => (
    <View>
        <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <Path d="m252.615-217.232-35.383-35.383L444.616-480 217.232-707.385l35.383-35.383L480-515.384l227.385-227.384 35.383 35.383L515.384-480l227.384 227.385-35.383 35.383L480-444.616 252.615-217.232Z" />
        </Svg>
    </View>
);

export default Close;
