import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Currency = (props) => (
    <View>
        <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <Path d="M552.974-140.001 294.873-408.052v-59.383H420q59 0 105.18-37.706 46.18-37.705 50.308-105.885H250.001v-50.255h320.718q-12.795-47.257-54.487-77.86-41.693-30.603-96.232-30.603H250.001v-50.255h459.998v50.255H554.511q25.77 18.231 44.078 48.065 18.308 29.833 24.59 60.398h86.82v50.255h-84.307q-4.154 87.974-64.103 140.91Q501.641-417.18 420-417.18h-63.694l266.179 277.179h-69.511Z" />
        </Svg>
    </View>
);

export default Currency;
