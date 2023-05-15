let num = 3;
let baseURL= "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${num}?json`).then(data=> {
    console.log(data);
    });

// 2.
let nums = [1,2,3]
$.getJSON(`${baseURL}/${nums}?json`).then(data=> {
    console.log(data);
    });

// 3.
Promise.all(
    Array.from({ length: 4}, () => {
    return $.getJSON(`${baseURL}/${num}?json`);
    })).then(facts => {
      facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    }
);