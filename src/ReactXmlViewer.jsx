/* eslint-disable sort-imports */
import { createElement } from "react";

import { Viewer } from "./components/Viewer";
import "./ui/ReactXmlViewer.css";

export function ReactXmlViewer(props) {
    if (!props.xmlAttr?.value) {
        return null;
    }

    const indentSize = props.indentSize >= 0 && props.indentSize <= 10 ? props.indentSize : 2;

    const theme = {
        attributeKeyColor: props.attributeKeyColor,
        attributeValueColor: props.attributeValueColor,
        cdataColor: props.cdataColor,
        commentColor: props.commentColor,
        fontFamily: props.fontFamily,
        separatorColor: props.separatorColor,
        tagColor: props.tagColor,
        textColor: props.textColor,
        lineNumberBackground: props.lineNumberBackground,
        lineNumberColor: props.lineNumberColor
    };

    return (
        <Viewer
            xml={props.xmlAttr.value}
            indentSize={indentSize}
            invalidXmlMessage={props.invalidXmlMessage?.value}
            collapsible={!!props.collapsible.value}
            showLineNumbers={!!props.showLineNumbers}
            theme={theme}
            widgetName={props.name}
        />
    );
}
