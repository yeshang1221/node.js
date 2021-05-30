// ----------5/30---------------
  
// https://www.twse.com.tw/exchangeReport/STOCK_DAY
// ?response=json
// &date=20210523
// &stockNo=2610

// npm i axios
// 引入 axios
const axios = require("axios");

// TODO: 從 stock.txt 讀股票代碼進來
// filesystem
// npm i fs ??? -> 不用
const fs = require("fs");
const moment = require("moment");
// console.log(moment().format());
// console.log(moment().format("YYYYMMDD"));

function readFilePromise(){
    return new Promise((resolve,reject) => {
        fs.readFile("stock.txt", "utf8", (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
    });
});
}
readFilePromise()
.then((data) => {
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
        params: {
          response: "json",
          date: moment().format("YYYYMMDD"),
          stockNo: data,
        },
      });
    })
      .then((response) => {
        if (response.data.stat === "OK") {
          console.log(response.data.date);
          console.log(response.data.title);
        }
      })
      .catch((err) => {
          console.log(err)
      });
    


// ----------5/29---------------
// const axios =require('axios');

// axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY',{
//     params: {
//         response:"json",
//         date:"20210529",
//         stockNo:"0050",
//     },
// })
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(error);
// })
// .then(function(){
//     //always executed
// })