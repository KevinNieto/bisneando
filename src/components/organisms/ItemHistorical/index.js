import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import tax from "../../../imgs/tax.png";
import basura from "../../../imgs/icons/basura.png";

const ItemHistorical = ({
    status,

}) => {

  return (
    <View style={s` h-70 drop-shadow-xl  rounded-xl  bg-white flex flex-row  mt-2 w-full mx-1`} >

          <View style={s`flex mx-3 mt-6 mb-3`}>
            <Image
              style={s`h-20 w-20 rounded-xl`}
              source={tax}
            />
          </View>

          <View style={s` w-full pt-2  mr-10 `}>
            

            <View style={s` w-full    mr-10  flex flex-row  `}>
              <View style={s` w-64`}>
              
                <View style={s` w-60 mx-2  flex flex-row`} >
                  <Text style={s` text-black font-bold text-3xl   w-32 text-amber-400`}>
                    L1000.00
                  </Text>
                  <Text style={s`pl-1 pt-2.5 text-black   text-sm truncate  leading-none`}>
                    (12 productos)
                  </Text>
                </View>

                <View style={s`col-1  pl-1.5 flex flex-row`} >
                  <Text style={s` text-black  text-gray-400`}>
                    Entregado el 9 de septiembre a las 12:45 
                  </Text>
                </View>

                <View style={s`pt-1  pb-1  flex flex-row`}>
                  <View style={s` w-28 mx-2  flex flex-row`} >
                    <Badge status={status}/>
                  </View>
                  <View style={s` w-28 mx-1  flex flex-row`} >
                      {
                        status ==="done"?

                        (
                          <Button
                        style={[
                              s`h-7 w-full mr-100 pl-4 bg-amber-400 justify-center rounded-md `,
                        
                        ]}
                        labelStyles={
                              s` font-bold text-center text-md`}
                        
                            title="Ver Detalle"
                        
                      />
                        ):(
                          <Button
                        style={[
                              s`h-7 w-full mr-100 pl-3 bg-amber-400 justify-center rounded-md `,
                        
                        ]}
                        labelStyles={
                              s` font-bold text-center text-md`}
                        
                            title="Seguimiento"
                        
                      />
                        )
                      
                      }
                      
                      
                  </View>
                  

                  
                </View>
                
             
         


              </View>
              

              
            </View>



          
            

          </View>

    </View>
  )
};

export default ItemHistorical;
