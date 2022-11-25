import styled, { css } from 'styled-components';

interface IStyledMainWindow {}

const StyledMainWindow = styled.div<IStyledMainWindow>`
  ${(props) => {
    return css`
      background: green;
      width: 100px;
      height: 100px;
      width: fit-content;
      height: fit-content;
    `;
  }}
`;

StyledMainWindow.displayName = 'StyledMainWindow';

export default StyledMainWindow;
