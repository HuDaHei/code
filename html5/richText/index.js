class RichText extends HTMLElement {
    constructor() {
        super()
        this.addContentEditElement();
        this.defaultStyle();
    }
    defaultStyle() {
        this.style.display = 'inline-block';
    }
    addContentEditElement() {
        const tool = this.tool();
        const shadow = this.attachShadow({mode: 'open'});
        const documentFramget = document.createDocumentFragment();
        const contentEditEleContainer = document.createElement('div');
        const contentEditEle = document.createElement('div');
        contentEditEleContainer.style.cssText = `display:inline-block;width:50vw;border:1px solid red`
        contentEditEle.setAttribute('contenteditable', true);
        contentEditEle.style.cssText = `display:inline-block;width:100%;min-height: 250px;outline:none`

        contentEditEleContainer.appendChild(tool);
        contentEditEleContainer.appendChild(contentEditEle);
        documentFramget.appendChild(contentEditEleContainer)
        shadow.appendChild(documentFramget);
    }
    // 工具栏
    tool() {
        const toolContainer = document.createElement('div');
        toolContainer.style.cssText = `line-height:32px;background:skyblue;`;
        // 工具项
            const ul = document.createElement('ul');
            ul.style.cssText = `display:flex;padding:0;margin:0; list-style: none;`
            const toolType = [
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                },
                {
                    name: '标题',
                    icon: 'xxx1',
                },
                {
                    name: '标题',
                    icon: 'xxx2',
                },
                {
                    name: '标题',
                    icon: 'xxx3',
                },
                {
                    name: '标题',
                    icon: 'xxx4',
                }
            ];
            toolType.forEach(t => {
                const li = document.createElement('li');
                const { name, icon } = t;
                li.innerText = icon;
                li.setAttribute('name', name);
                ul.appendChild(li);
            })

        //
        toolContainer.appendChild(ul);
        return toolContainer;
    }
}

customElements.define('rich-text', RichText)