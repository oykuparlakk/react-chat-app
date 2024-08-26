import React from "react";
import { Baloon, Bell, Exit, Home, Settings } from "../Icons";
import { SidebarContainer } from "./SideBar.styles";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <div className="icon-container">
        <Home />
        <Baloon />
        <Bell />
        <Settings />
      </div>
      <Exit className="exit-icon" />
    </SidebarContainer>
  );
};

export default Sidebar;
