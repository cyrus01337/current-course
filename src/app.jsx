import "./globals.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DateCounter from "./date-counter";

const CONTAINER = document.getElementById("root");
const ROOT = createRoot(CONTAINER);

ROOT.render(
    <StrictMode>
        <main className="font-sans">
            <ol className="list-inside list-decimal"></ol>

            <DateCounter />
        </main>
    </StrictMode>,
);
