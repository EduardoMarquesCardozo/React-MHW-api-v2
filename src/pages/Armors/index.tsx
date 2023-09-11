import ArmorInfo from "./ArmorInfo";
import ArmorSetList from "./ArmorSetList";
import { LBox, MBox, Wrapper } from "./styles";

const Armors = () => {
  return (
    <Wrapper>
      <LBox>
        <ArmorSetList />
      </LBox>
    </Wrapper>
  );
};

export default Armors;
