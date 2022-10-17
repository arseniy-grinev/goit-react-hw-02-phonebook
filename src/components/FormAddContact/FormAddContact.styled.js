import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 50px;
  margin-top: 20px;
  width: 400px;
  padding: 20px;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const AddContactBtn = styled.button`
  margin: 0 auto;
  display: block;
  border: 1px solid lightgray;
  border-radius: 2px;
  text-transform: capitalize;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.2);
  &:hover,
  &:focus {
    scale: 1.08;
  }
`;
