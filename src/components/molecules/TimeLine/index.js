import React from "react";
import Timeline from "react-native-timeline-flatlist";

const TimeLine = ({ data }) => {
  return <Timeline data={data} innerCircle={"icon"} circleSize={30} />;
};

export default TimeLine;
