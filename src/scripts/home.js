// FUNCTION UNTUK MEMPERCEPAT QUERY DOM
const $ = (query, opsi='')=>{
    if(opsi.match(/all/i))
        return document.querySelectorAll(query);
    else
        return document.querySelector(query);
}

// FUNCTION MENGAMBIL DATA JSON
const fetchData = async ()=>{
    try{
        const dataSource = await fetch('./DATA.json');
        const dataJson   = await dataSource.json();
        showCardBox(dataJson);
        showReviewBox(dataJson);
    }catch(err){
        console.log(err);
    }
}

// FUNCTION MENAMPILKAN CARD-BOX
const showCardBox = (dataJson)=>{
    const data    = dataJson.restaurants;
    const cardBox = $('card-box');
    cardBox.data  = data;
}

// FUNCTION MENAMPILKAN REVIEW BOX
const showReviewBox = (dataJson)=>{
    const data      = dataJson.reviews;
    const reviewBox = $('review-box');
    reviewBox.data  = data;
}

fetchData();