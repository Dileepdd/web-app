  import React from "react";
  interface projectPage {
    id: string;
  }
  const Project = ({ id }: projectPage) => {
    const renderComponent = () => {
      switch (id) {
        case "001":
          return <div>001 component</div>;
        case "002":
          return <div>002 component</div>;
        case "003":
          return <div>003 component</div>;
        case "004":
          return <div>004 component</div>;
        default:
          return <div>Unknown component</div>; // Handle any other case
      }
    };
    return <div>{renderComponent()}</div>
  };

  export default Project;
