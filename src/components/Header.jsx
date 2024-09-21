import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const Header = () => {
  const [message, setMessage] = useState("Home Page");

  // // component DidMount
  // useEffect(() => {
  //   alert("DID MOUNT");
  //   return () => {
  //     // Component Will Unmount
  //     alert("WILL UNMOUNT");
  //   };
  // }, []); // Array harus kosong

  // component did update
  useEffect(() => {
    alert("DID UPDATE");
  }, [message]);

  const changeMessage = () => {
    setMessage("This Header");
  };

  return (
    <>
      <Heading />
      <header className="container mx-auto mt-12 rounded-2xl bg-slate-900 mb-[50px] max-w-[470px]">
        <p>{message}</p>
        <h1 className="font-bold text-4xl text-center p-12 mt-4 tracking-wider text-white">
          {message}
        </h1>
        <Button
          onClick={changeMessage}
          className="p-4 m-2 justify-center items-center "
        >
          Update Message
        </Button>
      </header>
    </>
  );
};

export default Header;
