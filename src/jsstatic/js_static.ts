import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { SharedClass } from './sharedClass';

@customElement("js-static")
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
