class CardElmnt extends HTMLElement{
    set data(dataObj){
        this._dataObj = dataObj;
        this.render();
    }
    
    render(){
        const dataObj = this._dataObj;

        this.innerHTML = `
            <figure>
                <img src="${dataObj.pictureId}" alt="Restaurant ${dataObj.name}" title="Restaurant ${dataObj.name}">
            </figure>

            <section class="text-box">
                <div class="info">
                    <p title="Rating">Rating ${dataObj.rating}</p>
                    <p title="Location">Location ${dataObj.city}</p>
                </div>
                <h3>${dataObj.name}</h3>
                <p>${dataObj.description}</p>
            </section>
        `;
    }
}

customElements.define('card-elmnt', CardElmnt);