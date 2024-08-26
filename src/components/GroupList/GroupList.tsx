import React from "react";
import { DoubleTick, Search } from "../Icons";
import Ellipse3 from "../../assets/Ellipse3.png";
import Ellipse4 from "../../assets/Ellipse4.png";
import Ellipse6 from "../../assets/Ellipse6.png";
import Ellipse7 from "../../assets/Ellipse7.png";
import Ellipse8 from "../../assets/Ellipse8.png";
import Ellipse9 from "../../assets/Ellipse9.png";
import Ellipse10 from "../../assets/Ellipse10.png";

import {
  GroupListContainer,
  SearchContainer,
  Container,
  GroupRow,
  GroupImage,
  GroupContent,
  GroupInfo,
} from "./GroupList.styles";

const GroupList: React.FC = () => {
  return (
    <GroupListContainer>
      <SearchContainer>
        <Search />
        <p>Search...</p>
      </SearchContainer>

      <Container>
        <h2>Groups</h2>
        <div>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse3} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Friends Forever</h3>
              <p>Hahahahah!</p>
            </GroupContent>
            <GroupInfo>
              <p>Today, 9.52pm</p>
              <div className="badge">3</div>
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse6} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Anil</h3>
              <p>April fool’s day</p>
            </GroupContent>
            <GroupInfo>
              <p>Today, 9.52pm</p>
              <DoubleTick />
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse4} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Hiking</h3>
              <p>It’s not going to happen</p>
            </GroupContent>
            <GroupInfo>
              <p>Wednesday, 9.12am</p>
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse4} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Hiking</h3>
              <p>It’s not going to happen</p>
            </GroupContent>
            <GroupInfo>
              <p>Wednesday, 9.12am</p>
            </GroupInfo>
          </GroupRow>
        </div>
      </Container>

      <Container>
        <h2>People</h2>
        <div>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse6} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Anil</h3>
              <p>April fool’s day</p>
            </GroupContent>
            <GroupInfo>
              <p>Today, 9.52pm</p>
              <DoubleTick />
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse7} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Chuuthiya</h3>
              <p>Baag</p>
            </GroupContent>
            <GroupInfo>
              <p>Today, 12.11pm</p>
              <div className="badge">1</div>
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse8} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Mary ma’am</h3>
              <p>You have to report it...</p>
            </GroupContent>
            <GroupInfo>
              <p>Today, 2.40pm</p>
              <div className="badge">1</div>
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse9} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Bill Gates</h3>
              <p>Nevermind bro</p>
            </GroupContent>
            <GroupInfo>
              <p>Yesterday, 12.31pm</p>
              <div className="badge">5</div>
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse10} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Victoria H</h3>
              <p>Okay, brother. let’s see...</p>
            </GroupContent>
            <GroupInfo>
              <p>Wednesday, 11.12am</p>
              <DoubleTick />
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse10} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Victoria H</h3>
              <p>Okay, brother. let’s see...</p>
            </GroupContent>
            <GroupInfo>
              <p>Wednesday, 11.12am</p>
              <DoubleTick />
            </GroupInfo>
          </GroupRow>
          <GroupRow>
            <GroupImage>
              <img src={Ellipse9} alt="Group Icon" />
            </GroupImage>
            <GroupContent>
              <h3>Bill Gates</h3>
              <p>Nevermind bro</p>
            </GroupContent>
            <GroupInfo>
              <p>Yesterday, 12.31pm</p>
              <div className="badge">5</div>
            </GroupInfo>
          </GroupRow>
        </div>
      </Container>
    </GroupListContainer>
  );
};

export default GroupList;
