class ReviewElmnt extends HTMLElement{
    set data(dataObj){
        this._dataObj = dataObj;
        this.render();
    }

    render(){
        const data = this._dataObj;

        this.innerHTML = `
            <img class="photo" src="${data.photo}" alt="Photo Profile"></img>
            <section>
                <h3>${data.name}</h3>
                <p>${data.skill}</p>
                <p>${data.review}</p>
            </section>
        `;
    }
}

customElements.define('review-elmnt', ReviewElmnt);