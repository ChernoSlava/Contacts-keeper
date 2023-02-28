import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const ContactFormHeader = styled.h1`
  color: rgb(1, 118, 202);
`;
export const ContactType = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const ContactTypeFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
`;
export const ContactTypeRadio = styled.div`
  display: flex;
  align-items: center;
`;