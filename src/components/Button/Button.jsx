import { StyledButton } from './Button.styledd';

const Button = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
