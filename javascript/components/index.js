class HelloWord extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const shadow = this.attachShadow({mode:'open'})
        const span = document.createElement('span')
        span.innerText =  'shadow 自定义'
        span.addEventListener('click', e => {
            this.setAttribute('name', 'change')
        })
        shadow.appendChild(span)
        this.setAttribute('name','hello world')

        this.fetchData()
        this.customEvent()
        this.watchProp()
    }
    fetchData() {
        const XHR = new XMLHttpRequest()
        XHR.onreadystatechange = e => {
            if(e.target.readyState === 4 && e.target.status === 200) {
                const response = JSON.parse(e.target.response)
                this.setAttribute('xhr', response.name)
            }
        }
        XHR.open('GET', './test.json')
        XHR.send()
    }
    customEvent() {
        const event = new CustomEvent('nameChange', {
            bubbles:true,
            cancelable:true,
            detail: {
                name: 'test'
            }
        })
        setTimeout(()=> {
            document.dispatchEvent(event)
        })
        console.log('kkkkk')
    }
    watchProp() {
        const cb = (mutationList, observe) => { console.log(mutationList, observe) }
        var observerOptions = {
            childList: true,  // 观察目标子节点的变化，是否有添加或者删除
            attributes: true, // 观察属性变动
            subtree: true     // 观察后代节点，默认为 false
          }
        const observeInstance = new MutationObserver(cb)
        observeInstance.observe(this,observerOptions)

    }
}
customElements.define('hello-world', HelloWord)