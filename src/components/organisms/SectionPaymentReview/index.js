import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { SectionList } from "../../molecules";
import PaymentReviewContainer from "../PaymentReviewContainer";

const SectionPaymentReview = () => {
  const [visibleStatus, setVisibleStatus] = useState(false);

  return (
  
    <SectionList
      title="Resumen"
      iconName={visibleStatus ? "chevron-up" : "chevron-down"}
      visible={visibleStatus}
      event={(value) => {
        setVisibleStatus(!value);
      }}
    >
      <PaymentReviewContainer/>
    </SectionList>
  
  );
};



export default SectionPaymentReview;