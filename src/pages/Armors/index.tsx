import ArmorInfo from "./ArmorInfo";
import ArmorMaterial from "./ArmorMaterial";
import ArmorSetList from "./ArmorSetList";
import { LBox, MBox, RBox, Wrapper } from "./styles";

const Armors = () => {
  return (
    <Wrapper>
      <LBox>
        <ArmorSetList />
      </LBox>
      <MBox>
        <ArmorInfo />
      </MBox>
      <RBox>
        <ArmorMaterial />
      </RBox>
    </Wrapper>
  );
};

export default Armors;
