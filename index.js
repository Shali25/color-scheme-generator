const getBtn = document.getElementById("get-btn")

getBtn.addEventListener("click", function(){
    let selectedColor = document.querySelector("#color-picker").value
    const color = (selectedColor.slice(1,7)).toUpperCase()
    const mode = document.querySelector("#drop-menu").value  
    
    document.getElementById("swatches").innerHTML = ""
    document.getElementById("hexes").innerHTML = ""
       
const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`
    
       fetch(url)
        .then(res => res.json())
        .then(data => {
            const colArray = data.colors
            colArray.map((color)=>{
                
                document.getElementById("swatches").innerHTML += `
                <div id="color-div" style="background-color: ${color.hex.value}"></div>
                `
                
                document.getElementById("hexes").innerHTML +=`
                <h1>${color.hex.value}</h1>
                `
            })
        })
})


        // what to send to API... 
// the color taken from the picker ... 'seed-color' along with 
// 'color scheme mode' eg. Monochrome
// when you press the 'get color scheme' btn returns HEX values and 
// display those values

// stretch goal: click on color or value and it copies to clipboard
