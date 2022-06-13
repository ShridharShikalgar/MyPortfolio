const textes = document.querySelectorAll(".typewriter span")
let prevText = textes[textes.length-1]
let i = 0


setInterval(_=> animate(), 5000)

function animate(){
	let index = (i++) % textes.length
    setTimeout(function(){
        prevText.style.display = "none"
	textes[index].style.display = "block"
    prevText = textes[index]
    },4000)
	

	
}

animate()


