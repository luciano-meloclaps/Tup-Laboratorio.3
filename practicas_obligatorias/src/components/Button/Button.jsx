import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonRandom = () => {
  const [incButton, setIncButton] = useState(0);

  const clickButton = () => {
    setIncButton(incButton + 1);
  };

  return (
    <Button
      onClick={clickButton}
      variant="outline-secondary"
      className="fa fa-linkedin-square mb-5"
      aria-hidden="true"
    >
      Afuera: {incButton}
    </Button>
  );
};

export default ButtonRandom;
