import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  position: relative;
  text-align: center;
  background-color: ${props => `${props.theme.colors.bgColor}`};
  width: 250px;
  border-radius: 10px;

  :hover {
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
    transition: 1s transform;
  }
`;

// Уточнить у ментора по поводу функции
// const bgColor = ({isOnline, theme}) => {
//     return isOnline ? theme.colors.green : theme.colors.red
// }
export const Status = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding-top: 30px;
  border-radius: 20px;
`;

export const Name = styled.p`
  padding-top: 20px;
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  color: ${props => getRandomHexColor(props)};
  background-color: ${props => getRandomHexColor(props)};
`;
