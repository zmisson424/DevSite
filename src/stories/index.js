import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import "bootstrap/dist/css/bootstrap.css";

addDecorator(story => (
  <div style={{ fontFamily: "Nunito, sans-serif" }}>{story()}</div>
));

require("./components/header");
