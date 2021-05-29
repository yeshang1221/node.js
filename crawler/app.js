const axios =require('axios');

axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?',{
    params: {
        response:"json",
        date:"20210529",
        stockNo:"0050",
    },
})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
})
.then(function(){
    //always executed
})