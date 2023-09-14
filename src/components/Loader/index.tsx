import useSkillData from "../../hooks/useSkillData";
import { Wrapper } from "./styles";
const Loader = () => {
  const { isLoading } = useSkillData();
  return (
    <>
      {isLoading && (
        <Wrapper>
          <div className="spinner"></div>
        </Wrapper>
      )}
    </>
  );
};

export default Loader;
