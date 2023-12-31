import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  border-radius: 16px;
  background-color: var(--bg-opaque);
  border: 1px solid var(--border);
  width: 100%;
  p {
    font-weight: 400;
    line-height: 120%;
  }
`;

export const Content = styled.div`
  flex-direction: row;
  h5 {
    padding: 6px 16px;
  }
  p {
    margin: 0;
  }
`;

export const Title = styled.div`
  justify-content: center;
  padding: 16px 0;
`;

export const InfoColumn = styled.section`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const Info = styled.div`
  flex-direction: column;
  margin-bottom: 36px;
  gap: 24px;
`;

export const Row = styled.div`
  padding: 0 16px;
  justify-content: space-between;
  div {
    gap: 8px;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  p {
    font-size: 12px;
    display: flex;
    align-items: center;
  }
`;

export const Decoration = styled.div`
  flex-direction: column;
  article {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 24px;
    div {
      align-items: baseline;
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export const SkillsColumn = styled.section`
  display: flex;
  flex-direction: column;
  flex: 4;
  h5 {
    justify-content: center;
    display: flex;
  }
  section {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;

    article {
      padding: 12px 8px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--bg-opaque);
    }
  }
`;

export const Skills = styled.div`
  flex-direction: column;
  section {
    border-left: 2px solid var(--border);
  }
`;

export const STitle = styled.div`
  justify-content: space-between;
  margin-bottom: 4px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
  }
  span {
    color: rgba(255, 255, 255, 0.75);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
`;
export const SContent = styled.div`
  gap: 4px;
`;

export const FilledCheck = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid #4c4948;
  background: var(--selected);
`;

export const EmptyCheck = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid #4c4948;
  background: rgba(26, 22, 21, 0.5);
`;

export const SetBonusSkills = styled.div`
  flex-direction: column;
  border-left: 2px solid var(--border);
  article {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const SetBonusContent = styled.div`
  gap: 4px;
  font-size: 12px;
  p {
    display: flex;
    align-items: center;
  }
  span {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const SetBonusTitle = styled.div`
  font-size: 14px;
  span {
    color: rgba(255, 255, 255, 0.75);
    font-size: 12px;
  }
`;

export const Icon = styled.div`
  font-family: Arial;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  align-items: center;
`;
