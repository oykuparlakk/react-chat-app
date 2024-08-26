import React from "react";
import { Dots, Phone, Video } from "../../Icons";
import {
  UserBoxContainer,
  UserImage,
  UserInfo,
  UserIcons,
} from "./UserBox.styles";
import Ellipse7 from "../../../assets/Ellipse7.png";

const UserBox: React.FC = () => {
  return (
    <UserBoxContainer>
      <UserImage>
        <img src={Ellipse7} alt="User" />
      </UserImage>

      <div className="border"></div>

      <UserInfo>
        <h3>John Doe</h3>
        <p>Last seen: Today at 3:00 PM</p>
      </UserInfo>

      <UserIcons>
        <Phone />
        <Video />
        <Dots />
      </UserIcons>
    </UserBoxContainer>
  );
};

export default UserBox;
