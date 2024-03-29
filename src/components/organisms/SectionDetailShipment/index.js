import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { SectionList } from "../../molecules";
import DetailContainer from "../DetailContainer";

const SectionDetailShipment = () => {
  const [visibleStatus, setVisibleStatus] = useState(false);

  return (
  
    <SectionList
      title="Detalles sobre la entrega"
      iconName={visibleStatus ? "chevron-up" : "chevron-down"}
      visible={visibleStatus}
      event={(value) => {
        setVisibleStatus(!value);
      }}
    >
      <DetailContainer/>
    </SectionList>
  
  );
};



export default SectionDetailShipment;