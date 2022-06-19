import React from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";

const root = createRoot(document.getElementById("matrixnorm-app"));
root.render(<Counter />);
