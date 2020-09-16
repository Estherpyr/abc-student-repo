var x=0;

function ClickButton()
{
  var added = document.getElementById("range").value;
  added=parseInt(added);
  x+= added;
  var blank = document.createElement("blank");
  for(i=0;i<added;i++){
    var image= new Image();
    image.src='kendall.jpg';
    image.style.width='150px'
    image.style.height='auto'
    document.body.appendChild(image);
  }
}
