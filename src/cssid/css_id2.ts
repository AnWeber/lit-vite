import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("css-id2")
export class CssId2Element extends LitElement {
	static styles = [
		css`
		:host {
			display: inline-block;
		}
		#test{
			background: yellow;
			border-radius: 50%;
			width: 20px;
			height: 20px;
		}
		`
	];

	render() {
		return html`<div id="test"></div>`;
	}
}
