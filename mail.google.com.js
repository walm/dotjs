// remove some ads
setInterval(function(){

  var frame = $('iframe[id*="canvas"]');
  if (frame.length > 0)
    frame[0].contentDocument.getElementsByClassName("adC")[0].style.display = 'none'

}, 2000);
