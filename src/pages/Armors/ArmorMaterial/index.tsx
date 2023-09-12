import { HighlightTitle } from "../styles";
import { Materials, MaterialsList, Title, Wrapper } from "./styles";

const ArmorMaterial = () => {
  return (
    <Wrapper>
      {/* <img src="" alt="" /> */}
      <div className="img">IMAGEM</div>
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
          <section>
            <div>Anjanath Scale</div>
            <p>2</p>
          </section>
          <section>
            <div>Anjanath Scale</div>
            <p>2</p>
          </section>
          <section>
            <div>Anjanath Scale</div>
            <p>2</p>
          </section>
          <section>
            <div>Anjanath Scale</div>
            <p>2</p>
          </section>
        </MaterialsList>
      </Materials>
    </Wrapper>
  );
};

export default ArmorMaterial;
