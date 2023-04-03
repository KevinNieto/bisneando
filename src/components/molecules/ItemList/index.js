import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import clock from "../../../imgs/icons/clock.png";
import { Actions } from "react-native-router-flux";
import moment from "moment";

const ItemList = ({
  item,
  type
}) => {

  const goTo = () => {
    Actions.detailShipment()
  }

//  const { name, profilePicture, statusClient, status, pickUpDate, deliveryDate, nameClient, clientInfo } = item.data;

  const options = {
    weelday: "short",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }

  //const textPickUpDate = pickUpDate ? moment(pickUpDate).format("DD/MM/YYYY") : "No disponible";
  //const textRequestDate = deliveryDate ? moment(deliveryDate).format("DD/MM/YYYY") : "No disponible";
  return (
    <TouchableOpacity style={s`cols-3 h-70  rounded-lg  bg-white  flex-row mt-2 px-2 pb-2 w-28 mx-1`} onPress={() => goTo() }>
      <View style={s`cols-1 gap-4`}>
          <View style={s`pr-12 grid-col-1`}>
            <Image
              style={s`h-24 w-24`}
              source={type === "historicals" ? clock : box}
            />
          </View>
          <View style={s`col-1  w-24`} >
            <Text style={s`text-black text-center text-sm truncate  leading-none`}>
              Coca Cola Lata 355ml
            </Text>
          </View>

          <View style={s`pt-2 col-1 w-24`} >
            <Text style={s` text-black text-center text-amber-400`}>
              L15.00
            </Text>
          </View>

          <View style={s`pt-3 col-1 w-24`}>
            <Button
              style={[
                s`h-8  pl-6 bg-amber-400 justify-center rounded-md `,

              ]}
              labelStyles={
                s` font-bold text-center text-xs`}

              title="Agregar"
            
            />
          </View>
      </View>
    </TouchableOpacity>
  )
};

export default ItemList;
