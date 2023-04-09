import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { SectionList } from "../../molecules";
import ItemDetailProduct from "../ItemDetailProduct";

const SectionProducts = () => {
  const [visibleStatus, setVisibleStatus] = useState(true);

  return (
  
    <SectionList
      title="Productos"
      iconName={visibleStatus ? "chevron-up" : "chevron-down"}
      visible={visibleStatus}
      event={(value) => {
        setVisibleStatus(!value);
      }}
    >
      <View>
        <ItemDetailProduct/>
        <ItemDetailProduct/>
        <ItemDetailProduct/>
      </View>
    </SectionList>
  
  );
};



export default SectionProducts;