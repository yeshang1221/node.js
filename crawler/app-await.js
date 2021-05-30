const axios = require("axios");
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


async function appawait(){
    // await回來就是result
    try{
        let stockCode = await readFilePromise();
        let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
           params: {
             response: "json",
             date: moment().format("YYYYMMDD"),
             stockNo: stockCode,
           },
         });
         if (response.data.stat === "OK") {
            console.log(response.data.date);
            console.log(response.data.title);
          }

    }catch(err){
        console.error("錯誤",err);
    // }finally{
    //     console.log("做完了");
    // }
    
}}
appawait()