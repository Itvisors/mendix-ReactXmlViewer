import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ReactXmlViewer.css";

export function ReactXmlViewer({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
