import {
  Wrapper,
  Tab,
  SetsGroup,
  Title,
  Table,
  Name,
  Parts,
  Pagination,
} from "./styles";
import Placeholder from "../../../assets/armor_icons/armor_placeholder.svg";

const ArmorSetList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper>
      <div className="flex">
        <Tab className="low-rank">Low Rank</Tab>
        <Tab>High Rank</Tab>
        <Tab>Master Rank</Tab>
        {/* 
        <Tab className="low-rank">Low Rank</Tab>
        <Tab className="high-rank">High Rank</Tab>
        <Tab className="master-rank">Master Rank</Tab> 
        */}
      </div>
      <SetsGroup>
        <Title>
          <p>sets</p>
          <p>parts</p>
        </Title>
        <Table>
          {list.map((value) => (
            <div key={value}>
              <Name>
                <h3>Pukei</h3>
                <span>Rarity 3</span>
              </Name>
              <Parts>
                <div>
                  <img src={Placeholder} alt="" />
                </div>
                <div>
                  <img src={Placeholder} alt="" />
                </div>
                <div>
                  <img src={Placeholder} alt="" />
                </div>
                <div>
                  <img src={Placeholder} alt="" />
                </div>
                <div>
                  <img src={Placeholder} alt="" />
                </div>
              </Parts>
            </div>
          ))}
        </Table>
        <Pagination>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Pagination>
      </SetsGroup>
    </Wrapper>
  );
};

export default ArmorSetList;
