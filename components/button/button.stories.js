import * as React from "react";
import { Button } from "./button";
import BackButton from "../back-button/back-button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle: "This button does something",
  },
};

/**
 * @type {import('./button').ButtonProps}
 */
const mainButtonProps = {
  text: "Default Button",
  onClickHandler: () => {
    return;
  },
};

/**
 * @type {import('./button').ButtonProps}
 */
const disabledButtonProps = {
  text: "Disabled Button",
  onClickHandler: () => {
    return;
  },
  isDisabled: true,
};

/**
 * @type {import('./button').ButtonProps}
 */
const emptyButtonProps = {
  text: "Empty Button",
  onClickHandler: () => {
    return;
  },
  isFilled: false,
};
/**
 * @type {import('./button').ButtonProps}
 */
const disabledEmptyButtonProps = {
  text: "Disabled Empty Button",
  onClickHandler: () => {
    return;
  },
  isFilled: false,
  isDisabled: true,
};

export const mainButton = () => <Button {...mainButtonProps} />;
export const emptyButtom = () => <Button {...emptyButtonProps} />;
export const disabledButton = () => <Button {...disabledButtonProps} />;
export const disabledEmptyButton = () => (
  <Button {...disabledEmptyButtonProps} />
);
export const BackButtonStory = () => <BackButton text="All News" />;
