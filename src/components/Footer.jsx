import { useState } from "react";
import { withAlert } from "../hoc/withAlert";
import { Button } from "@nextui-org/react";

const Footer = (props) => {
  const [message, setMessage] = useState("Hallo World");
  const changeMessage = () => {
    setMessage("State Changed");
  };

  return (
    <>
      <footer className="bg-slate-800 text-center p-1 font-bold">
        <h3 className="tracking-widest text-white">its my footer, 2024</h3>
        <p className="text-white">({props.propsTambahan})</p>
        <p data-testid="state-message" className="text-white">
          {message}
        </p>
        <Button data-testid="change-message-btn" onClick={changeMessage}>
          Change Message
        </Button>
      </footer>
    </>
  );
};

export default withAlert(Footer);
