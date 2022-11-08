import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("input-id")
export class InputIdElement extends LitElement {
	static styles = [
		css`
		:host {
			display: block;
		}
		`
	];

	render() {
		return html`<label for="test">Text im Label</label><input id="test" type="checkbox">`;
	}
}
