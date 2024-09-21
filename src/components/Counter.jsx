import { Card, Button, Divider, Input } from "@nextui-org/react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // GLOBAL State Version
  const counterSelector = useSelector((store) => store.counter);
  const messageSelector = useSelector((store) => store.message);

  const dispatch = useDispatch();

  const [inputCounter, setInputCounter] = useState(0);

  const setGlobalCounter = () => {
    dispatch({
      type: "SET",
      counterValue: inputCounter,
    });
  };
  const incrementGlobalCounter = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const decrementGlobalCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const resetGlobalCounter = () => {
    dispatch({
      type: "RESET",
    });
  };

  // LOCAL State Version
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="container max-w-[450px] mx-auto">
      <Card className="container mx-auto max-w-[600px] mt-12 mb-12 bg-slate-50">
        <h3 className="text-center font-bold mt-10 mb-10 text-2xl tracking-wider">
          LOCAL STATE VERSION
        </h3>
        <Divider />
        <div className="flex items-center justify-around min-h-44">
          <Button onClick={decrementCounter} color="danger">
            Substract
          </Button>
          <span className="text-3xl font-semibold">{count}</span>
          <Button onClick={incrementCounter} color="primary">
            Add
          </Button>
        </div>
      </Card>

      <Divider />

      <Card className="container mx-auto max-w-[600px] mt-12 mb-12 bg-slate-50">
        <h3 className="text-center font-bold mt-10 mb-10 text-2xl tracking-wider">
          GLOBAL STATE VERSION
        </h3>
        <Divider />

        <div className="bg-slate-700 text-white p-8 rounded-xl">
          <p className="text-center text-xl font-bold font-sans">
            {counterSelector.name} : {counterSelector.count}
          </p>

          <Input
            type="number"
            value={inputCounter}
            onChange={(event) => {
              setInputCounter(parseInt(event.target.value));
            }}
            placeholder=" Input Manual Value"
            className="mt-4 mb-3 ml-10 max-w-[300px]"
          />
          <div className="flex justify-center">
            <Button onClick={setGlobalCounter} color="primary">
              SET MANUAL GLOBAL COUNT
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-around min-h-32">
          <Button onClick={decrementGlobalCounter} color="primary">
            Substract
          </Button>
          <Button onClick={incrementGlobalCounter} color="primary">
            Add
          </Button>
        </div>
        <Divider />
        <div className="flex justify-center mb-8">
          <Button
            onClick={resetGlobalCounter}
            color="danger"
            className="mt-4 font-bold font-serif"
          >
            RESET
          </Button>
        </div>
        <p className="text-center mb-2 font-bold font-sans bg-slate-800 text-white p-2">
          {messageSelector.username} | {messageSelector.position}
        </p>
      </Card>
    </div>
  );
};

export default Counter;
