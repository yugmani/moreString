let string1 = "I went to the store ";
let string2 = "then ";
let string3 = "I played a video game";


const stringEl = document.getElementById("string_write");
const sliceEl = document.getElementById("slice_write");
const substringEl = document.getElementById("substring_write");
let html = "<p>";
    html += 'string1 = "I went to the store "<br>';
    html += 'string2 = "then "<br>';
    html += 'string3 = "I played a video game"<br><br>';

function concatString(st1, st2, st3){
    let string4 = st1.concat(st2, st3);
    html += "<strong>string1.concat(string2, string3) = </strong>";
    html += string4 + "</p>";
    stringEl.innerHTML = html;
}

function sliceString(start, position){
    let sliceString = string1.slice(start, position);
    let ht = "<p>";
    ht += `<strong>string1.slice(${start}, ${position}) = </strong>`;
    ht += sliceString + "</p>";
    sliceEl.innerHTML = ht;
}



function subString(strings){
 let subString = strings.substring(3, 7);
 let htm = "<p>";
 htm += `<strong>strings.substring(3, 7)</strong> = ${subString}`;
 htm += "</p>";
 substringEl.innerHTML = htm;
}

concatString(string1, string2, string3);
sliceString(0, 7);
// sliceString(2, 5);
subString(string1);