import styled from "styled-components";

interface NoDataProps {
  padding?: string;
  fontSize?: string;
  message: string;
}

const NoData = ({ padding, fontSize, message }: NoDataProps) => {
  return (
    <NoDataIcon
      $padding={padding ? padding : "0px"}
      $fontSize={fontSize ? fontSize : "14px"}
    >
      <h3>{message}</h3>
    </NoDataIcon>
  );
};

const NoDataIcon = styled.div<{ $padding: string; $fontSize: string }>`
  width: 100%;
  justify-content: center;
  h3 {
    text-align: center;
    padding: ${(props) => props.$padding};
    font-size: ${(props) => props.$fontSize};
    font-style: normal;
    font-weight: 500;
  }
`;

export default NoData;
