import {
  IndicatorColor,
  
  create,
} from "@openfin/workspace/notifications";
import React from "react";

const OpenFinNotification = () => {
  const generateNotification = () => {
    const notification = {
      title: "Test Nirvana",
      toast: "transient",
      body: "This is a simple notification that be dismissed by clicking the body",
      category: "default",
      template: "markdown",
      icon: `${process.env.REACT_APP_BASE_URL}/favicon.ico`,
      indicator: {
        color: IndicatorColor.BLUE,
        text: "indicatorValue",
      },
    };

    create(notification);
  };

  return (
    <div>
      <div className="wrapper">
        <h3 >Please run this page in Openfin environment.</h3>
        <br />
        <button onClick={generateNotification}/>
      </div>
    </div>
  );
};
export default OpenFinNotification;
