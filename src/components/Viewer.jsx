import XMLViewer from "react-xml-viewer";
import { createElement } from "react";

export function Viewer({ xml, indentSize, invalidXmlMessage, collapsible, showLineNumbers, widgetName }) {
    const className = widgetName + " react-xml-viewer-widget";
    return (
        <div className={className}>
            <XMLViewer
                xml={xml}
            />
        </div>
    );
}
