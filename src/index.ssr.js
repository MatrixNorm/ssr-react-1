import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Counter } from "./Counter";

hydrateRoot(document.getElementById("matrixnorm-app"), <Counter />);
