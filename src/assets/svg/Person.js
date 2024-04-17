import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Person = (props) => (
  <View>
    <Svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
      <Path d="M480-492.719q-57.749 0-96.438-38.689-38.689-38.688-38.689-96.566 0-57.877 38.689-96.438 38.689-38.56 96.438-38.56t96.438 38.56q38.689 38.561 38.689 96.438 0 57.878-38.689 96.566-38.689 38.689-96.438 38.689ZM180.001-187.694v-80.255q0-31.282 16.705-55.576 16.705-24.295 43.808-37.346 61.871-28.41 121.056-42.744 59.184-14.333 118.422-14.333t118.225 14.539q58.987 14.538 120.692 42.72 27.813 13.028 44.451 37.243 16.639 24.215 16.639 55.497v80.255H180.001Zm50.255-50.255h499.488v-30q0-14.462-8.936-27.449-8.936-12.987-23.578-20.603-56.564-27.615-109.34-39.653-52.777-12.039-107.89-12.039t-108.428 12.039q-53.315 12.038-109.213 39.653-14.641 7.616-23.372 20.603-8.731 12.987-8.731 27.449v30ZM480-542.974q35.974 0 60.423-24.448 24.449-24.449 24.449-60.424 0-35.974-24.449-60.423-24.449-24.448-60.423-24.448-35.974 0-60.423 24.448-24.449 24.449-24.449 60.423 0 35.975 24.449 60.424 24.449 24.448 60.423 24.448Zm0-84.872Zm0 389.897Z" />
    </Svg>
  </View>
);

export default Person;