class Reviewbox extends HTMLElement{
    set data(dataArr){
        this._dataArr = dataArr;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <h2>User Reviews</h2>
                <article></article>

                <ul class="indicator-list"></ul>
            </div>
        `;

        const data          = this._dataArr;
        const reviewList    = this.querySelector('article');
        const indicatorList = this.querySelector('.indicator-list');

        this.showReviews(data, reviewList, indicatorList);
        this.autoSlide(data, reviewList, 5000);
    }

    // METHOD UNTUK MENAMPILKAN DATA REVIEWS
    showReviews(data, reviewList, indicatorList){
        data.forEach( item =>{
            const indicator   = document.createElement('li');
            const reviewElmnt = document.createElement('review-elmnt');

            reviewElmnt.data  = item;
            reviewList.appendChild(reviewElmnt);
            indicatorList.appendChild(indicator);
        })
    }

    // GESER OTOMATIS KE SLIDE BERIKUT-nYA
    autoSlide(data, reviewList, delay){
        let i            = 0;
        let autoSlide    = 1;
        let scrollX      = reviewList.offsetWidth;
        const indicators = this.querySelectorAll('.indicator-list li');

        indicators[i].classList.add('current');
        reviewList.scroll(scrollX*i++, 0);

        setInterval(()=>{
            if(autoSlide){
                indicators[i-1].classList.remove('current');

                i >= data.length ? i=0 : true;
                
                indicators[i].classList.add('current');
                reviewList.scroll(scrollX*i++, 0);
            }
        }, delay);

        indicators.forEach((item, index, arr)=>{
            item.addEventListener('click', event=>{
                if(!event.target.classList.contains('current')){
                    arr.forEach(item => item.classList.remove('current'));
                    event.target.classList.add('current');
                    reviewList.scroll(scrollX*index, 0);
                    autoSlide = 0
                    setTimeout(()=> autoSlide++, delay)
                    i = index+1;
                }
            })
        });

        window.addEventListener('resize', ()=>{
            scrollX = reviewList.offsetWidth;
            reviewList.scroll(scrollX*(i-1), 0);
        });
    }
}

customElements.define('review-box', Reviewbox);