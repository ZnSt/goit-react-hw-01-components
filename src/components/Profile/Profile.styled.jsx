import styled from '@emotion/styled';

export const Card = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: ${props => `${props.theme.colors.textColor}`};
  background-color: ${props => `${props.theme.colors.bgColor}`};
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  border-bottom: none;
  border-radius: 20px;
  padding-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${props => `${props.theme.colors.secondaryTextColor}`};
`;

export const Tag = styled.p`
  ${props => `${props.theme.colors.secondaryTextColor}`};

  color: ${props => `${props.theme.colors.secondaryTextColor}`};
`;

export const Location = styled.p`
  margin: 0;
  color: ${props => `${props.theme.colors.secondaryTextColor}`};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 0;
  background-color: ${props => `${props.theme.colors.borderColor}`};
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
