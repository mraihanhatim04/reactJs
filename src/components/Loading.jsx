import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen justify-center">
        <Spinner
          label="Please Wait For A Moment..."
          color="primary"
          labelColor="primary"
        />
      </div>
    </>
  );
};

export default Loading;
