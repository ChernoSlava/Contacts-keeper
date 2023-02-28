import styled from 'styled-components';

export const ContactCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: lightgrey;
  border: 1px solid grey;
  min-height: 150px;
`;
export const ContactCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContactCardName = styled.div`
  color: rgb(1, 118, 202);
`;
export const ContactCardType = styled.div`
  color: white;
  background-color: green;
  border-radius: 4px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContactCardEmail = styled.div`
  color: gray;
`;
export const ContactCardPhone = styled.div`
  color: gray;
`;
export const ContactCardButtons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
`;
