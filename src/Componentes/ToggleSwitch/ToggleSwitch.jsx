import React from "react";
import styled from "styled-components";

// Define os estilos baseados em props
const SwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  width: ${({ size }) =>
        size === "small" ? "40px" : size === "medium" ? "60px" : "80px"};
  height: ${({ size }) =>
        size === "small" ? "20px" : size === "medium" ? "30px" : "40px"};
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isOn }) => (isOn ? "green" : "gray")};
  border-radius: ${({ size }) =>
        size === "small" ? "10px" : size === "medium" ? "15px" : "20px"};
  transition: background-color 0.2s;
  transition: transform 0.2s;

  &:before {
    content: "";
    position: absolute;
    height: ${({ size }) =>
        size === "small" ? "16px" : size === "medium" ? "26px" : "36px"};
    width: ${({ size }) =>
        size === "small" ? "16px" : size === "medium" ? "26px" : "36px"};
    border-radius: 50%;
    left: ${({ size, isOn }) => {
        const widthValue = size === "small" ? 17 : size === "medium" ? 27 : 37;
        return isOn ? `calc(100% - ${widthValue}px)` : "2px";
    }};
    top: 2px;
    background: white;
    transition: 0.2s;
  }
`;

const ToggleSwitch = ({ isOn, onToggle, size = "medium" }) => {
    return (
        <SwitchWrapper size={size}>
            <HiddenCheckbox checked={isOn} onChange={onToggle} />
            <Slider isOn={isOn} size={size} />
        </SwitchWrapper>
    );
};

export default ToggleSwitch;
