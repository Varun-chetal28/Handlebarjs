var rawData = document.querySelector("#gameofthronesData").innerHTML;
var compiledTemplate = Handlebars.compile(rawData);
// var ourGeneratedHTML = compiledTemplate(gotData);
// var dataContainer = document.getElementById("data-container");
// dataContainer.innerHTML = ourGeneratedHTML;

const load = document.querySelector(".load");
fetch('https://thronesapi.com/api/v2/Characters')
.then(response => response.json())
.then((data) => {
    var start=0;
    var end =2;
    load.addEventListener("click",()=>{
        const newdata = data.slice(start, end)
        var context = {
            gotData : newdata
        };
         var ourGeneratedHTML = compiledTemplate(context);
         document.getElementById("data-container").innerHTML += ourGeneratedHTML;
         start+=2;
         end+=2;
    })
});
