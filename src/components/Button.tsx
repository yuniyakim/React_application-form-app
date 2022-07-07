import styled from 'styled-components';

const Button = styled.div<{disabled?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 50px;
  background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#0086A8'};
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({disabled = false}) => disabled ? '#828282' : '#FFFFFF'};
  border-radius: 8px;
  
  &:hover {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#007693'};
  }
  
  &:active {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#00657E'};
  }
`;

export default Button;
