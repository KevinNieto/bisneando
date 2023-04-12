import React  from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList, SectionList } from "../../molecules";
import { Tab, TabHeading, Tabs } from "native-base";
import { BlockButton, RowInfo } from "../../atoms";

import { Picker } from "@react-native-community/picker";
import { ItemHistorical } from "../../organisms";
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";

const Historicals = () => {


  return (
    <View style={s`flex-1 px-6`}>
    <Tabs 
      hideNavBar
      noShadow={true} 
    
      locked tabBarUnderlineStyle={s`bg-amber-400 h-0.5  rounded-full shadow-none`}
      tabContainerStyle={{elevation: 0}}
      tabStyle={s`bg-gray-400 mx-4 mb-2 rounded-full `}
      activeTabStyle={s`bg-amber-400 mx-4 mb-2 rounded-full shadow-none`}
    
    >
      <Tab
            heading={
              <TabHeading 
                style={s`bg-gray-100 drop-shadow-none`}   
                noShadow={true} 
                tabContainerStyle={{elevation: 0}} 
                >
                <View style={s`bg-amber-400 px-6 py-2 mb-2 rounded-full shadow-none`}>
                    <Text style={s`font-bold`}  >
                      Activos
                    </Text>
                </View>
                
              </TabHeading>
        }>
        <View style={s`flex-1 bg-gray-100`}>
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
          
          heading={
            <TabHeading 
              style={s`bg-gray-100 drop-shadow-none`} 
              noShadow={true} 
              tabContainerStyle={{elevation: 0}} 
              
            >
              
              <View style={s`bg-amber-400 px-6 py-2 mb-2.5 rounded-full shadow-none`}>
                  <Text  style={s`font-bold`} >
                    Historial
                  </Text>
              </View>
            </TabHeading>
      }>
          <View style={s`flex-1 bg-gray-100`}>
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
  hideRightButton: true,
};

export default wrappedView(Historicals, historicalsConfigView);
