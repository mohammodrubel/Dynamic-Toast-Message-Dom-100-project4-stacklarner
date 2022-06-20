let div = null
window.onload = ()=>{
    main()
}


const main = ()=>{
    const root = document.getElementById('root')
    const output = document.getElementById('output')
    const copy_color = document.getElementById('copy_color')
    const btn = document.getElementById('btn')
    // const root = document.getElementById('root')

        btn.addEventListener('click',()=>{
            const backgroundColorFunction = colorGenarator()
            root.style.backgroundColor = backgroundColorFunction
            output.value = backgroundColorFunction
        })
        copy_color.addEventListener('click',()=>{
            navigator.clipboard.writeText(output.value)
            if(div !== null){
                div.remove()
                div = null
            }
            genarateTostMessage(`${output.value} copied`)
        })
}


const colorGenarator = ()=>{
    const red = Math.floor(Math.random()* 255)
    const green = Math.floor(Math.random()* 255)
    const blue = Math.floor(Math.random()* 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
const genarateTostMessage = (msg)=>{
    div = document.createElement('div')
    div.innerHTML = msg 
    div.className = 'tost_msg tost_mas_slid_in'

    div.addEventListener('click',()=>{
        div.classList.remove('tost_mas_slid_in')
        div.classList.add('tost_mas_slid_out')

        div.addEventListener('animationend',()=>{
            div.remove()
            div = null
        })
    })
   

    document.body.appendChild(div)
}

