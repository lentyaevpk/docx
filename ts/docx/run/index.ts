import {XmlComponent, Attributes} from "../xml-components";
import {RunProperties} from "./properties";
import {Bold, Italics, Underline} from "./formatting";
import {Tab} from "./tab";
import {Break} from "./break";

export class Run extends XmlComponent {
    private properties: RunProperties;


    constructor() {
        super("w:r");
        this.properties = new RunProperties();
        this.root.push(this.properties);
    }

    bold(): Run {
        this.properties.push(new Bold());
        return this;
    }

    italic(): Run {
        this.properties.push(new Italics());
        return this;
    }

    underline(): Run {
        this.properties.push(new Underline());
        return this;
    }

    break(): Run {
        this.root.splice(1, 0, new Break());
        return this;
    }

    tab(): Run {
        this.root.splice(1, 0, new Tab());
        return this;
    }
}