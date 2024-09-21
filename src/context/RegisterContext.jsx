import React from "react";

export const RegisterContext = React.createContext({
  title: "Header Page",
});

export const RegisterContextProvider = RegisterContext.Provider;
export const RegisterContextConsumer = RegisterContext.Consumer;
