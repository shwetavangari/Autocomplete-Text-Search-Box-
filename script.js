var searchValues=[
    "how to run javascript code in visual studio code",
    "how to download visual studio in windows 10",
    "how to earn money online",
    "what is java full stack developer",
    "what is servlet in java",
    "what is servlet in java ",
    "what is difference between get and post method",
    "why"
]
var searchText=document.querySelector("#searchText")
var list=document.querySelector("#list")
// list.style.opacity=1

searchText.addEventListener("keydown",function(){
    console.log("keydown")
    var result=[]
    if(searchText.value){
        result=searchValues.filter(function(keyword){
            return keyword.toLowerCase().includes(searchText.value.toLowerCase())
        })
        console.log(result)
        var content=""
        result.forEach(function(element){
            
            // var temp="<li onclick=display(this)><i class='fa-solid fa-magnifying-glass'></i>"+element+"</li>"

            var temp="<li onclick=display(this)><i class='fa-solid clrs2 fa-magnifying-glass'></i><span>"+element+"</span></li>"

            content=content+temp
        })
        list.innerHTML=content
    }
})

function display(element){
    searchText.value=element.innerText
    list.innerHTML=""
}
