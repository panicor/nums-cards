let num = 3;
let baseURL= "http://numbersapi.com";

// 1.
async function pt1(){
    let res = await $.getJSON(`${baseURL}/${num}?json`);
    console.log(res);
}
pt1();

// 2.
let nums = [1,2,3]
async function pt2(){
    let res = await $.getJSON(`${baseURL}/${nums}?json`);
    console.log(res);
}
pt2();

// 3.
async function pt3(){
    let info = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${num}?json`)));
    info.forEach(data => {
        $("body").append(`<p>${data.text}</p>`)});
}
pt3();