import styled from 'styled-components/native';
import { Platform, StatusBar } from "react-native";

const SafeViewForDevice = styled.SafeAreaView`
    flex: 1;
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export default SafeViewForDevice;