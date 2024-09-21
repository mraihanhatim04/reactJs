import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

const Heading = () => {
  const registerContext = useContext(RegisterContext);

  return (
    <h1 className="text-center justify-center mt-20 font-bold text-xl bg-cyan-800 text-white tracking-widest max-w-[700px] p-5 container mx-auto">
      {registerContext.title}
    </h1>
  );
};

export default Heading;
