// Importing axios from axios module and cheerio module and parse function from node-html-parser

const axios = require("axios");
const { parse } = require("node-html-parser");
const cheerio  = require("cheerio");
const fs = require('fs');

// Scrape function to fetch the data from a webpage and show it's HTML Elements in the parsed data
let scrape = async (url) => {
  let response = await axios.get(url)
  .then(response => {
    // console.log(response.data);
    let $ = cheerio.load(response.data);
    let articles = [];
    
    // $('.a-price-whole').each((index, element) => {
    //   console.log($(element));
    // });

    // $('.a-price-whole').each((index, element) => {
    //   articles.push(
    //     $(element).text().trim()
    //   );
      
    // });
    articles.push($('.a-price-whole').text().trim().split('.')[0]);
    console.log($('.a-price-whole').text().trim().split('.')[0]);

    fs.writeFile('./scrapper.json', JSON.stringify(articles), (error) => {
      if (error) throw error;
    });

  })
  .catch(error => {
    console.log(error);
  });

  // let res = parse(response.data);
  // console.log(res) // HTML Element from the parsed data
};

scrape(
  "https://www.amazon.in/dp/B08PV548K9/ref=cm_sw_r_apa_i_YSA53YCAMF1Q3SYQ0377_0?th=1"
);