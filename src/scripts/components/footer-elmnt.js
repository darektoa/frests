class FooterElmnt extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <img src="./images/icons/icon-frests.svg" alt="Icon Frests">
                <section class="container">
                    <h2>Frests</h2>
                    <p>Copyright &copy 2020 Frests - Abdul</p>
                </section>
            </div>
        `;
    }
}

customElements.define('footer-elmnt', FooterElmnt);