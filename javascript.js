var bigImage = document.getElementById('big')
var subImage = document.getElementById('sub').getElementsByTagName('img')

for (var i=0; i>subImage.length;i++){
subImage[i].addEventListener('click',full_image) 

}

function full_image(){
var imgSrc= this.getAttribute('src')
bigImage.innerHTML = " <img src="+imgSrc+">";

}