const seedColor = document.getElementById("seed-color")
const options = document.getElementById("scheme-options")
const schemeColors = document.getElementById("scheme-colors")

document.getElementById("scheme-form").addEventListener("submit" , (e)=>{
    e.preventDefault()
    console.log(seedColor.value , options.value)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${options.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        let html = ''
        let hexes = ''
        for( let color of data.colors){
            html += `
            <div class="scheme-color" style="background-color:${color.hex.value} ;"></div>
        `
            hexes += `
                <p>${color.hex.value}</p>
            `
    }
    document.getElementById("scheme-colors").innerHTML = html
    document.querySelector(".hex-names").classList.add("flex")
    document.querySelector(".hex-names").innerHTML = hexes
        
    })
})

