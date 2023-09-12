import {
  Wrapper,
  Title,
  InfoColumn,
  SkillsColumn,
  Info,
  Row,
  Skills,
  SetBonusSkills,
  Decoration,
  Content,
  FilledCheck,
  EmptyCheck,
  STitle,
  SContent,
  SetBonusContent,
  Icon,
  SetBonusTitle,
} from "./styles";

import Defense from "../../../assets/defense_icons/defense.svg";
import { Small } from "../../../assets/decoration_icons";

const ArmorInfo = () => {
  const ailments = ["Vs Fire", "Vs Water", "Vs Thunder", "Vs Ice", "Vs Dragon"];
  const decoration = ["Small", "Medium", "Large"];
  return (
    <Wrapper>
      <Title>
        <h1>Anja Coil</h1>
      </Title>
      <Content>
        <InfoColumn>
          <Info>
            <h5>INFO</h5>
            <Row>
              <div>
                <img src={Defense} alt="" />
                <p>Defense</p>
              </div>
              <p>20</p>
            </Row>
            {ailments.map((type) => (
              <Row key={type}>
                <div>
                  <img src={Defense} alt="" />
                  <p>{type}</p>
                </div>
                <p>2</p>
              </Row>
            ))}
          </Info>
          <Decoration>
            <h5>DECORATIONS</h5>
            <article>
              {decoration.map((size) => (
                <div key={size}>
                  <img src={Small} alt={size} />
                  <p>x {size} decoration</p>
                </div>
              ))}
            </article>
          </Decoration>
        </InfoColumn>
        <SkillsColumn>
          <Skills>
            <h5>SKILLS</h5>
            <section>
              <article>
                <STitle>
                  <p>Fire resistance</p>
                  <span>Level 1</span>
                </STitle>
                <SContent>
                  <FilledCheck />
                  <EmptyCheck />
                  <EmptyCheck />
                </SContent>
              </article>
              <article>
                <STitle>
                  <p>Thunder resistance</p>
                  <span>Level 1</span>
                </STitle>
                <SContent>
                  <FilledCheck />
                  <FilledCheck />
                  <FilledCheck />
                  <EmptyCheck />
                  <EmptyCheck />
                </SContent>
              </article>
            </section>
          </Skills>
          <SetBonusSkills>
            <h5>SET BONUS SKILLS</h5>
            <section>
              <article>
                <SetBonusTitle>
                  <p>Anjanath Power</p>
                </SetBonusTitle>
                <SetBonusContent>
                  <p>3</p>
                  <Icon>►</Icon>
                  <span>Adrenaline</span>
                </SetBonusContent>
              </article>
              <article>
                <SetBonusTitle>
                  <p>Anjanath Power</p>
                </SetBonusTitle>
                <SetBonusContent>
                  <p>3</p>
                  <Icon>►</Icon>
                  <span>Adrenaline</span>
                </SetBonusContent>
              </article>
            </section>
          </SetBonusSkills>
        </SkillsColumn>
      </Content>
    </Wrapper>
  );
};

export default ArmorInfo;
