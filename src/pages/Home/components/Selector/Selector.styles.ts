import * as Select from "@radix-ui/react-select";

import styled from "styled-components";


export const SelectTrigger = styled(Select.Trigger)`
  border: 1px solid ${(props) => props.theme["base-label"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  line-height: 1;
  height: 40px;
  gap: 20px;
  color: ${(props) => props.theme["base-input"]};
  background-color: ${(props) => props.theme["base-background"]};

  &:hover {
    background-color: ${(props) => props.theme["base-input"]};
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectViewPort = styled(Select.Viewport)`
  padding: 0.3125rem;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.theme["base-span"]};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    outline: none;
    background-color: ${(props) => props.theme["base-span"]};
    color: ${(props) => props.theme["base-background"]};
  }
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
