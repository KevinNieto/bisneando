import React, { useEffect, useState } from "react";

import { Button } from "../../atoms";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { s } from "react-native-wind";

const DatePicker = ({ placeholder, dateText, setDate, containerStyles }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDatePickerVisibility = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (date) => {
    setDate(date.getTime());
    handleDatePickerVisibility();
  };

  return (
    <>
      <Button
        title={dateText == "Invalid Date" ? placeholder : dateText}
        iconName="calendar"
        onPress={handleDatePickerVisibility}
        style={[s`rounded-md h-12 bg-input flex-row w-64`, containerStyles]}
        labelStyles={[
          s`self-center text-sm ml-3`,
          dateText !== "Invalid Date" ? s`text-black` : s`text-icon-input`,
        ]}
        event={handleDatePickerVisibility}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleDatePickerVisibility}
      />
    </>
  );
};

export default DatePicker;
