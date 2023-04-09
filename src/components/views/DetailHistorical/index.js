import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { SectionList } from "../../molecules";
import { SectionDetailShipment, SectionPaymentReview, SectionProducts } from "../../organisms";

const DetailHistorical = () => {

  return (
    <View style={s`flex-1 px-6`}>
     
     <ScrollView style={s`h-full`}>
             <SectionProducts/>
             <SectionDetailShipment/>
             <SectionPaymentReview/>
             <View
              style={s`h-12 w-full bg-white items-center pl-5 pr-5 flex-row justify-between mb-1`}
             >
                <Text style={s`font-bold text-base`}>Total</Text>
                <Text style={s`font-bold text-base`}>L1500.00</Text>
             </View>
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
