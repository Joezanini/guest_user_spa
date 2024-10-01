import React from "react";
import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';

const MeetingWidget = (props) => {
  return (
      <WebexMeetingsWidget
        style={{width: "1000px", height: "500px"}} // Substitute with any arbitrary size or use `className`
        accessToken={props.accessToken}
        meetingDestination={props.meetingDestination}
      />
  );
}

export default MeetingWidget;