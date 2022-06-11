class HeaderElmnt extends HTMLElement{
    connectedCallback(){
        this.hidden = false;
        this.previousY = 0;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <h1>Frests</h1>
                <nav>
                    <button is="button-burger"></button>
                    <ul>
                        <li><a href="#" class="current-page">Home</a></li>
                        <li><a href="#">Favorite</a></li>
                        <li><a href="https://instagram.com/" target="_blank">About Us</a></li>
                    </ul>
                </nav>
            </div>
        `;

        const headerElmnt   = this;
        const buttonBurger  = this.querySelector('button[is=button-burger]');
        const navList       = this.querySelector('nav ul');

        window.addEventListener('load', ()=> this.onLoad(headerElmnt) );
        window.addEventListener('scroll', ()=> this.onScroll(headerElmnt, navList) );
        buttonBurger.addEventListener('click', (event)=> this.buttonBurger(navList, event) );
    }


    // METHOD BUTTON BURGER ON CLICK
    buttonBurger(navList, event){
        const heightHeader  = this.offsetHeight;

        navList.classList.toggle('nav-show');
        navList.style = `height: calc(100vh - ${heightHeader}px); top: ${heightHeader}px`;
        
        event.target.addEventListener('blur', ()=> navList.classList.remove('nav-show') );
        event.stopPropagation();
    }


    // METHOD CHANGE HEADER ON LOAD
    onLoad(headerElmnt){
        if(window.pageYOffset !== 0){
            headerElmnt.classList.add('header-onscroll');
            this.hidden = false;
        } 
    }


    // METHOD CHANGER HEADER ON SCROLL
    onScroll(headerElmnt, navList){
        const currentY = window.pageYOffset;
        
        if(currentY < 10){
            headerElmnt.classList.remove('header-onscroll');
            this.hidden = false;

        }else if(currentY < this.previousY && this.hidden){
            headerElmnt.classList.replace('header-hidden', 'header-onscroll');
            this.hidden = false;
            
        }else if(currentY > this.previousY && !this.hidden){
            headerElmnt.classList.add('header-hidden');
            navList.classList.remove('nav-show');
            this.hidden = true;
            
        }

        if(navList.classList.contains('nav-show')){
            navList.classList.remove('nav-show');
        }

        this.previousY = currentY
    }
}

customElements.define('header-elmnt', HeaderElmnt);