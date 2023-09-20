import { Wrapper, Tab, SetsGroup, Title, Table, Name, Parts } from "./styles";
import { HighlightTitle } from "../styles";
import useArmorSetData from "../../../hooks/useArmorSetData/index";
import { useEffect, useState } from "react";
import {
  Armguard,
  Chestplate,
  Helmet,
  Leggings,
  Placeholder,
  Waist,
} from "../../../assets/armor_icons";
import Pagination from "../../../components/Pagination";

const ArmorSetList = () => {
  const [rank, setRank] = useState<"low" | "high" | "master">("low");
  const changeRank = (rankData: "low" | "high" | "master") => {
    if (rank == rankData) return;

    setRank(rankData);
    List(rankData);
  };

  const { List, armorSetPage, ChangeArmorPiece, selectedArmor } =
    useArmorSetData();

  useEffect(() => {
    List("low");
  }, [List]);

  return (
    <Wrapper>
      <div>
        <Tab
          className={`${rank == "low" && `low-rank`}`}
          onClick={() => {
            changeRank("low");
          }}
        >
          Low Rank
        </Tab>
        <Tab
          className={`${rank == "high" && `high-rank`}`}
          onClick={() => {
            changeRank("high");
          }}
        >
          High Rank
        </Tab>
        <Tab
          className={`${rank == "master" && `master-rank`}`}
          onClick={() => {
            changeRank("master");
          }}
        >
          Master Rank
        </Tab>
      </div>
      <SetsGroup>
        <Title>
          <HighlightTitle className="leftTitle">SETS</HighlightTitle>
          <HighlightTitle>PARTS</HighlightTitle>
        </Title>
        <Table data-testid="table">
          {armorSetPage?.length > 0 &&
            armorSetPage?.map((Armor) => (
              <div key={Armor.id + "-armor"}>
                <Name>
                  <h3>{Armor.name}</h3>
                  <span>
                    {Armor.pieces[0]?.rarity &&
                      "Rarity " + Armor.pieces[0]?.rarity}
                  </span>
                </Name>
                <Parts>
                  {Armor.pieces.map((piece) => (
                    <div
                      key={piece.id + "-piece"}
                      className={`${piece == selectedArmor && `selected`}`}
                      onClick={() => {
                        ChangeArmorPiece(piece, Armor.bonus);
                      }}
                    >
                      <img
                        src={
                          piece.type == "head"
                            ? Helmet
                            : piece.type == "chest"
                            ? Chestplate
                            : piece.type == "gloves"
                            ? Armguard
                            : piece.type == "waist"
                            ? Waist
                            : piece.type == "legs"
                            ? Leggings
                            : Placeholder
                        }
                        alt={piece.type}
                      />
                    </div>
                  ))}
                </Parts>
              </div>
            ))}
        </Table>
        <Pagination />
      </SetsGroup>
    </Wrapper>
  );
};

export default ArmorSetList;
