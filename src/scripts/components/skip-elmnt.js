class SkipElmnt extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <a href="#content">Skip To Content</a>
        `;
    }
}

customElements.define('skip-elmnt', SkipElmnt);