import useArmorSetData from "../../hooks/useArmorSetData";
import { Wrapper } from "./styles";
const Loader = () => {
  const { isLoading } = useArmorSetData();

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
