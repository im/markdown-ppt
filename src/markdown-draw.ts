import { html, css, property, customElement } from 'lit-element'
import { LitElement, CSSResult } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import * as echarts from 'echarts'

const orientPortrait = window.innerHeight > window.innerWidth
const ORIGINAL_WIDTH = orientPortrait ? 800 : 1280
const ORIGINAL_HEIGHT = orientPortrait ? 1280 : 800

@customElement('markdown-draw')
export class MarkdownDraw extends LitElement {

    @property({ type: String }) src: string

    myChart = null

    render () {
        const classNames = {
            draw: true
        }
        return html`<iframe src="${this.src}" class=${classNames}></iframe>`
    }

    static get styles () {
        return css`.draw {
            border:0;
            width: ${ORIGINAL_WIDTH}px;
            height: ${ORIGINAL_HEIGHT}px;
            place-self: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            --content-width: ${ORIGINAL_WIDTH}px;
            --content-height: ${ORIGINAL_HEIGHT}px;
          }`
    }

    firstUpdated () {
        const str = `<ifream src="${this.src}" class="draw"></ifream>`
        this.shadowRoot.innerHTML = str
        //
    }

    disposeChart () {
        //
    }

    disconnectedCallback () {
        //
    }
}
