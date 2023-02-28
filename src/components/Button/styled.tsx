import styled from 'styled-components';

export const ButtonStyled = styled.button<{
  renderType: 'add'|'remove'|'edit';
}>`
    background-color: transparent;
    border: none;
    width: 100%;
    height: 38px;
    cursor: pointer;
    color: white;
  ${props =>
    props.renderType === 'add' &&
    `
      background-color: blue;
    `}
  ${props =>
    props.renderType === 'remove' &&
    `
      background-color: red;
      width: 85px;
    `}
    ${props =>
    props.renderType === 'edit' &&
    `
      background-color: black;
      width: 60px;
    `}
    &:hover {
    opacity: 0.5;
  }

  /* Медиа запросы делаются так */
  /* @media (max-width: 768px ) {
        background-color: #0c7351
    } */
`;
