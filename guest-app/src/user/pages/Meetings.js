import React from "react";
import MeetingWidget

from "../../shared/components/MeetingWidget";

const Meetings = () => {
    const MEETINGS = [
      {
        accessToken: "YOUR_ACCESS_TOKEN",
        meetingDestination: "YOUR_MEEETING_DESTINATION"
      }
    ];
    return <MeetingWidget items={MEETINGS} />;
  };

  export default Users;