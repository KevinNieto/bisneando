import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { SectionList } from "../../molecules";
import { SectionDetailShipment, SectionPaymentReview, SectionProducts, SectionTotal } from "../../organisms";

const DetailHistorical = () => {

  return (
    <View style={s`flex-1 pt-10 px-6`}>
     
     <ScrollView style={s`h-full`}>
             <SectionProducts/>
             <SectionDetailShipment/>
             <SectionPaymentReview 
                  
             />
             <SectionTotal
              total={1500}
             />
      </ScrollView>
    </View>
  );
};

const detailHistoricalConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Detalle del Pedido",
  hideRightButton: true,
};

export default wrappedView(DetailHistorical, detailHistoricalConfigView);
