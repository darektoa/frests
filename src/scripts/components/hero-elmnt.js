class HeroElmnt extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="filter"></div>
            <img src="./images/heros/hero-1.jpg" alt=" ">
            
            <div class="text-box container">
                <h1>Frests</h1>
                <p>Frests is a modern way of finding restaurants, find your favorite restaurants</p>
            </div>
        `;
    }
}

customElements.define('hero-elmnt', HeroElmnt);