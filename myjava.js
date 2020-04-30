function scrolly() {
	window.addEventListener("scroll", function(event) {
		var scroll12 = window.pageYOffset;
		if (scroll12 > 700){
			document.getElementById("home").className = "animated1 slideInDown"
		}
	});
}
scrolly()

function slide() {
	document.getElementById("home").className = "animated slideOutUp"

}
window.onscroll = function() {handleScroll()};

        function handleScroll() {
          if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
              let animations = document.getElementsByClassName("animated2");
              for(let i = 0; i < animations.length; i++){
                animations[i].style.display = "block"
              }

          }
          if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
              let animations = document.getElementsByClassName("animated3");
              for(let i = 0; i < animations.length; i++){
                animations[i].style.display = "block"
              }

          }
        }

function drop() {
	document.getElementById("drop").style.display = "block";
}

function close() {
	document.getElementById("drop").style.display = 'none';
	console.log("hi")
}
