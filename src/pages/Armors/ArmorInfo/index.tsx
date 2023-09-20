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
  STitle,
  SetBonusContent,
  Icon,
  SetBonusTitle,
} from "./styles";

import Defense from "../../../assets/defense_icons/defense.svg";
import { Large, Medium, Small } from "../../../assets/decoration_icons";
import { HighlightTitle } from "../styles";
import useArmorSetData from "../../../hooks/useArmorSetData";
import NoData from "../../../components/NoData";
import { ailmentType, ailmentValue, skillChecks } from "./functions";
import useSkillData from "../../../hooks/useSkillData";

const ArmorInfo = () => {
  const ailments = ["Vs Fire", "Vs Water", "Vs Thunder", "Vs Ice", "Vs Dragon"];

  const { selectedArmor, selectedBonus } = useArmorSetData();
  const { skillList } = useSkillData();

  return (
    <Wrapper>
      <Title>
        <h1>{selectedArmor?.name}</h1>
      </Title>
      <Content>
        <InfoColumn>
          <Info>
            <HighlightTitle className="leftTitle">INFO</HighlightTitle>
            <Row>
              <div>
                <img src={Defense} alt="Base Defense value" />
                <p>Defense</p>
              </div>
              <p>{selectedArmor?.defense.base}</p>
            </Row>
            {ailments.map((type) => (
              <Row key={type + "-ailment"}>
                <div>
                  {ailmentType(type)}
                  <p>{type}</p>
                </div>
                <p>{ailmentValue(type, selectedArmor?.resistances)}</p>
              </Row>
            ))}
          </Info>
          <Decoration>
            <HighlightTitle className="leftTitle">DECORATIONS</HighlightTitle>
            {selectedArmor?.slots.map((decoration) => (
              <article>
                <div key={decoration.rank}>
                  <img
                    src={
                      decoration.rank == 1
                        ? Small
                        : decoration.rank == 2
                        ? Medium
                        : Large
                    }
                    alt="Decoration size"
                  />
                  <p>
                    {decoration.rank == 1
                      ? " Small "
                      : decoration.rank == 2
                      ? " Medium "
                      : " Large "}
                    decoration
                  </p>
                </div>
              </article>
            ))}
            {selectedArmor?.slots.length == 0 && (
              <NoData
                padding="16px"
                message="This armor piece doesn't have decoration slots"
              />
            )}
          </Decoration>
        </InfoColumn>
        <SkillsColumn>
          <Skills>
            <HighlightTitle>SKILLS</HighlightTitle>
            <section>
              {selectedArmor?.skills.map((skill) => (
                <article key={skill.id + "-skill"}>
                  <STitle>
                    <p>{skill.skillName}</p>
                    <span>Level {skill.level}</span>
                  </STitle>
                  {skillChecks(
                    skillList?.find((skillArr) => skillArr.id == skill.skill),
                    skill.level
                  )}
                </article>
              ))}
              {selectedArmor?.skills.length == 0 && (
                <NoData message="This armor piece doesn't have skills" />
              )}
            </section>
          </Skills>
          <SetBonusSkills>
            <HighlightTitle>SET BONUS SKILLS</HighlightTitle>
            <section>
              {selectedBonus?.ranks.map((bonus) => (
                <article key={bonus.skill.id + "-bonus"}>
                  <SetBonusTitle>
                    <p>{selectedBonus.name}</p>
                  </SetBonusTitle>
                  <SetBonusContent>
                    <p>{bonus.pieces}</p>
                    <Icon>►</Icon>
                    <span>{bonus.skill.skillName}</span>
                  </SetBonusContent>
                </article>
              ))}
              {!selectedBonus && (
                <NoData message="This armor set doesn't have bonus skills" />
              )}
            </section>
          </SetBonusSkills>
        </SkillsColumn>
      </Content>
    </Wrapper>
  );
};

export default ArmorInfo;
