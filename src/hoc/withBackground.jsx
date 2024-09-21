import React from "react";

export const withBackground = (InnerComponent) => {
  class WrapperComponent extends React.Component {
    render() {
      return (
        <div className="p-1 bg-teal-900">
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }

  return WrapperComponent;
};
