import "./globals.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DateCounter from "./date-counter";

const CONTAINER = document.getElementById("root");
const ROOT = createRoot(CONTAINER);

ROOT.render(
    <StrictMode>
        <main className="font-sans">
            <ol className="list-inside list-decimal">
                <li>balls</li>
                <li>balls #2</li>
                <li>balls #3</li>
            </ol>
            <DateCounter />
        </main>
    </StrictMode>,
);
