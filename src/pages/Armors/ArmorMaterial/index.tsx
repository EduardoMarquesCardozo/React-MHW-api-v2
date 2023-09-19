import NoData from "../../../components/NoData";
import { Placeholder } from "../../../assets/armor_icons";
import useArmorSetData from "@/hooks/useArmorSetData";
import { HighlightTitle } from "../styles";
import { Materials, MaterialsList, Title, Wrapper } from "./styles";

const ArmorMaterial = () => {
  const { selectedArmor } = useArmorSetData();

  return (
    <Wrapper>
      <img
        src={
          selectedArmor?.assets?.imageMale
            ? selectedArmor?.assets.imageMale
            : Placeholder
        }
        alt=""
      />
      <Materials>
        <Title>
          <div>
            <HighlightTitle className="leftTitle">
              REQUIRED MATERIALS
            </HighlightTitle>
          </div>
          <div>
            <HighlightTitle>QUANTITY</HighlightTitle>
          </div>
        </Title>
        <MaterialsList>
          {selectedArmor?.crafting.materials.map((material) => (
            <section>
              <div>{material.item.name}</div>
              <p>{material.quantity}</p>
            </section>
          ))}
          {selectedArmor?.crafting.materials.length == 0 && (
            <NoData
              padding="32px"
              message="We don't have materials data for this armor piece"
            />
          )}
        </MaterialsList>
      </Materials>
    </Wrapper>
  );
};

export default ArmorMaterial;
