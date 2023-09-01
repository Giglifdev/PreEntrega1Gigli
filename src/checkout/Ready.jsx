import React from "react";
import Footer from "../footer/footer";

const ready = () => {
  return (
    <div className="infoready">
      <h1 className="almostthere">Congratulations, your order was shipped</h1>
      <p className="mailcheck">
        check your email, soon you will receive details{" "}
      </p>

      <p>
        Pay attention to your email, we will be sending all the information
        corresponding to the status of your order by that means of
        communication.
      </p>
    </div>
  );
};

export default ready;
