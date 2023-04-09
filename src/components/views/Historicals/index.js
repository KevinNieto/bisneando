import React  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList, SectionList } from "../../molecules";
import { Tab, Tabs } from "native-base";
import { BlockButton, RowInfo } from "../../atoms";

import { Picker } from "@react-native-community/picker";
import { ItemHistorical } from "../../organisms";

const Historicals = () => {


  return (
    <View style={s`flex-1 px-6`}>
    <Tabs 
      tabContainerStyle={s`drop-shadow-none`}
      noShadow={true} hasTabs={true}

      locked tabBarUnderlineStyle={s`bg-transparent`}>
      <Tab
        tabContainerStyle={{elevation: 0}}
         style={s`bg-gray-100 shadow-none`}
        heading="Activos"
        textStyle={s`text-white`}
        tabStyle={s`bg-gray-400 mx-4 mb-2 rounded-full `}
        activeTabStyle={s`bg-amber-400 mx-4 mb-2 rounded-full shadow-none`}
        activeTextStyle={s`text-black `}
      >
        <View style={s`flex-1`}>
            <ScrollView style={s`h-full`}>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
              <ItemHistorical status={"process"}/>
            </ScrollView>
        </View>
      
       
      </Tab>
      <Tab
        
        heading="Historial"
        style={s`bg-gray-100 shadow-none`}
        textStyle={s`text-white`}
        tabStyle={s`bg-gray-400 rounded-full mx-4 mb-2  font-bold `}
        activeTabStyle={s`bg-amber-400 rounded-full mx-4 mb-2 font-bold `}
        activeTextStyle={s`text-black  `}
      >
          <View style={s`flex-1`}>
            <ScrollView style={s`h-full`}>
            <ItemHistorical status={"done"}/>
            </ScrollView>
        </View>
          {/* <Map
            width="100%"
            initialRegion={initialRegion}
            destination={
              routeMark == "origin" ? originCoordinates : destinyCoordinates
            }
          />  */}
       
      </Tab>
    </Tabs>
  </View>
  );
};

const historicalsConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Mis Pedidos",
  hideRightButton: true,
};

export default wrappedView(Historicals, historicalsConfigView);
