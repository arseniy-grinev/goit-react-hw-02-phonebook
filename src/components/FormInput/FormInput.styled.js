import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid lightgray;
  margin-left: 15px;
  font-size: 16px;
  width: 100%;
  outline: none;
  border-radius: 2px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const FormLabel = styled.label`
  font-size: 16px;
  text-transform: capitalize;
  display: flex;
`;
