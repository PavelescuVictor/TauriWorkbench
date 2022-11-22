import styled, { css } from 'styled-components';

interface IStyledMainWindow {}

const StyledMainWindow = styled.div<IStyledMainWindow>`
  ${(props) => {
    return css``;
  }}
`;

StyledMainWindow.displayName = 'StyledMainWindow';

export default StyledMainWindow;
