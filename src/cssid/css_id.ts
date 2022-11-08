import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("css-id")
export class CssIdElement extends LitElement {
	static styles = [
		css`
		:host {
			display: inline-block;
		}
			#test{
				background: green;
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
