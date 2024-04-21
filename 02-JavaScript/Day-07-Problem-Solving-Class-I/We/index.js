let Products = [

    {
      title : "Mobile",
      description : "16 GB RAM | 64 MP Camera",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
      price : 48999
    },
    {
        title : "Mobile",
        description : "16 GB RAM | 64 MP Camera",
        img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
        price : 47999
      },
    {
      title : "Refrigerator",
      description : "4 Star | Instant ICE",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/y/d/k/-original-imagwnkacu6rgagg.jpeg?q=70",
      price : 80000
    },
    {
      title : "Laptop",
      description : "32 GB RAM | RTX 3060",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/o/t/-original-imaguyhz7cyftguh.jpeg?q=70",
      price : 90599
    },
    {
      title : "Television",
      description : "32 inch LED Display",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/8/t/-original-imagzmeygvkvmzah.jpeg?q=70",
      price : 48999
    },
    {
      title : "Shoes",
      description : "Running support | Memory Foam",
      img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/j/7/-original-imagyrahgtfzwxbg.jpeg?q=70",
      price : 3999
    },
    {
      title : "Watch",
      description : "Stainless steel build",
      img : "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/a/8/-original-imagpzjfpydjvh6k.jpeg?q=70",
      price : 8999
    },
    {
      title : "Air Conditioner",
      description : "5 star , instant cooling",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
      price : 62999
    },
    ]
    
    
//    console.log(Products)

let container = document.querySelector("#container")

let inputBox = document.querySelector("#navbar>div>input")

let searchBtn = document.querySelector("#navbar-search")

let selectPrice = document.querySelector("#navbar-select")

let form = document.querySelector("form")

console.log(inputBox)

function showData(arr){

    container.innerHTML = ""
    arr.forEach(function(ele , i){
        let separateDiv = document.createElement("div")   
    
        let title = document.createElement("h3")
        title.innerHTML = ele.title
    
        let img = document.createElement("img")
        img.src = ele.img
    
        let desc = document.createElement("p")
        desc.innerText = ele.description
    
        let price = document.createElement("p")
        price.innerText = ele.price

        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete 🗑️"
        deleteBtn.addEventListener("click" , function(){
            deleteData(i)
        })
       
        separateDiv.append(img , title , desc , price , deleteBtn)
        container.append(separateDiv)
    })


}

function deleteData(index){
//    - .pop()
//    - .splice(index , how many elements after that index do you wanna remove)
    Products.splice(index , 1)

 // filter(function(ele,i))  => return i===index
    showData(Products)
}


function searchData(){
    // console.log(inputBox.value)
    let value = inputBox.value
    // use the above value and filter products arr based on ele.title
    let narr = Products.filter(function(ele,i){
         return ele.title.toLowerCase() === value.toLowerCase()
    })

    console.log(narr)
    // if(narr.length>0){
    //     showData(narr)
    // }
    // else{
    //     container.innerHTML = "<h2>Product not found ...</h2>"
    // }
    if(narr.length===0){
        container.innerHTML = "<h2>Product not found ...</h2>"
    }else{
        showData(narr)
    }
    

}

function sortData(){
    // console.log(selectPrice.value)
    let value = selectPrice.value
    let narr;
    // [1,2,3,4,5]

    if(value==="asc"){
      narr =  Products.sort(function(a,b){
          return a.price - b.price
       })
    }
    else if(value==="desc"){
        narr =  Products.sort(function(a,b){
            return b.price - a.price
         })
    }

    // console.log(narr)
    showData(narr)
}

function handleSubmit(e){

    e.preventDefault()
    console.log(e)
    let inputs = e.target
    let title = inputs[0].value
    let img = inputs[1].value
    let desc = inputs[2].value
    let price = inputs[3].value

    // title : "Air Conditioner",
    //   description : "5 star , instant cooling",
    //   img : "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
    //   price

    let obj = {
        title : title , 
        description : desc,
        img : img,
        price : price
    }

    Products.push(obj)

    showData(Products)

    // console.log(title , img , desc ,price)

}

searchBtn.addEventListener("click" , searchData)
selectPrice.addEventListener("change" , sortData )
form.addEventListener("submit" , function(event){
    handleSubmit(event)
})

showData(Products)

// function add(){
//     var a = 10
// }

// console.log(a) // 10

// {
//     var b = 20
// }

// console.log(b) // 20