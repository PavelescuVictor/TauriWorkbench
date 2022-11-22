import styled, { css } from 'styled-components';

interface StyledTestWindow {}

const StyledTestWindow = styled.div<StyledTestWindow>`
  ${(props) => {
    return css``;
  }}
`;

StyledTestWindow.displayName = 'StyledTestWindow';

export default StyledTestWindow;
