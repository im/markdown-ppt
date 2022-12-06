import { html, css, property, customElement } from 'lit-element'
import { LitElement, CSSResult } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import * as echarts from 'echarts'

const orientPortrait = window.innerHeight > window.innerWidth
const ORIGINAL_WIDTH = orientPortrait ? 800 : 1280
const ORIGINAL_HEIGHT = orientPortrait ? 1280 : 800
const delimiter = `<!--callback-->`

@customElement('markdown-chart')
export class MarkdownChart extends LitElement {

    myChart = null

    render () {
        const classNames = {
            chart: true
        }
        return html`<div class=${classMap(classNames)}>111</div>`
    }

    static get styles () {
        return css`.chart {
            filter: invert(0)!important;
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
        this.disposeChart()
        const elem = this.shadowRoot.querySelector('.chart') as HTMLElement
        try {
            this.myChart = echarts.init(elem)

            const content = this.innerHTML || ''
            let optionsStr = content

            if (content.indexOf(delimiter) > -1) {
                const arr = content.split(delimiter)
                optionsStr = arr[0] || ''

                try {
                    const callbackStr = arr[1] || ''
                    const cb = eval('(' + callbackStr + ')')
                    // const cb = new Function(callbackStr)

                    cb && cb(this.myChart, this.shadowRoot)
                    // console.log('this.shadowRoot: ', this.shadowRoot)
                    // this.shadowRoot.myChart = this.myChart

                    // const script = document.createElement('script')

                    // script.innerHTML = callbackStr
                    // this.shadowRoot.appendChild(script)

                } catch (e) {
                    console.log('cb: ', e)
                }
            }
            const options = eval('(' + optionsStr + ')')
            this.myChart.setOption(options)

        } catch (err) {
            console.log('err: ', err)
        }
    }

    disposeChart () {
        this.myChart && this.myChart.dispose()
    }

    disconnectedCallback () {
        this.disposeChart()
    }
}
