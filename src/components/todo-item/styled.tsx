import styled from '@emotion/styled';
type StyledSpanProps =  {
  completed: boolean;
}
export const StyledSpan = styled('span')<StyledSpanProps>`
  flex-grow: 1;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
