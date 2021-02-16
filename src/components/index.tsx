import React, { useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Application: React.FC = () => {

  const [hideAll, setHideAll] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Sidebar />
        <Chat />
      </div>
    </React.Fragment>
  );
};

export default Application;