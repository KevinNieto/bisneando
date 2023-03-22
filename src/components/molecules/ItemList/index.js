import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge } from "./../../atoms";
import box from "../../../imgs/icons/box.png";
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
    <TouchableOpacity style={s`w-full flex-row py-4`} onPress={() => goTo() }>
      <View style={s`pr-8`}>
        <Image
          style={s`h-16 w-16`}
          source={type === "historicals" ? clock : box}
        />
      </View>
      <View>
        <Text style={s`text-black font-bold w-56`}>No disponible</Text>
        <Text style={s`pt-3 text-black font-semibold`}>
          Fecha de recogida: No disponible
        </Text>
        <Text style={s`pb-4 text-black font-semibold`}>
          Fecha de entrega: No disponible
        </Text>

        {/* <View
        style={
              s`bg-blue-200 rounded-lg justify-center items-center w-40 h-8 mb-2 `
            }
        >
          <Text style={s`text-black text-base`}>En proceso</Text>
        </View> */}

        {type === "shipments" && <Badge status={"process"} />}

      </View>
    </TouchableOpacity>
  )
};

export default ItemList;
