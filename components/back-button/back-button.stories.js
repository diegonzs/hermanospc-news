import React from "react";
import { BackButton } from "./back-button";

export default {
  title: "Back Button",
  component: BackButton,
  parameters: {
    componentSubtitle: "This button returns the user to the root page.",
  },
};

export const backButton = () => <BackButton text={"All News"} />;
