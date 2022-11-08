import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("testSection")
export class JsStaticElement extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];

	constructor() {
		super();
		SharedClass.staticName = "js-static";
	}

	render() {
		return html`<div>Hello, ${SharedClass.staticName}</div>`;
	}
}
