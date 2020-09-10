class CardBox extends HTMLElement{
    set data(dataArr){
        this._dataArr = dataArr;
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Available Restaurants</h2>
            <article class="container"></article>
        `;

        const dataArr   = this._dataArr;
        const container = this.querySelector('article.container');

        for(const data of dataArr){
            const cardElmnt = document.createElement('card-elmnt');
            cardElmnt.data  = data;
            container.appendChild(cardElmnt);
        }

    }
}

customElements.define('card-box', CardBox);