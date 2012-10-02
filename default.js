// this will be run on every site
console.log('DotJS is on');

// remove ads
var ads = $('iframe[id*="aswift"], .ads');
if (ads.length > 1) {
  console.log("DotJS: Removing ads", ads);
  ads.remove();
}

// keyboard shortcuts
if (typeof Mousetrap != 'undefined') {
  var INSERT_MODE = false;

  var scrollPage = function(up) {
    if (INSERT_MODE) return;
    scrollPos = document.body.scrollTop;
    bottom = document.body.scrollHeight;
    if (up) scrollPos -= 300;
    else scrollPos += 300;
    if (scrollPos<0) scrollPos = 0;
    if (scrollPos>bottom) scrollPos = bottom;
    $(document).scrollTop(scrollPos);
  }

  Mousetrap.reset();

  // Insert mode
  $('input').focus(    function(){ INSERT_MODE=true; });
  Mousetrap.bind( 'i', function(){ INSERT_MODE=true; });

  // Command mode
  Mousetrap.bind('esc', function(){ INSERT_MODE=false; $('input').blur(); });
  Mousetrap.bind('H',   function(){ if (!INSERT_MODE) history.back(); });
  Mousetrap.bind('L',   function(){ if (!INSERT_MODE) history.forward(); });
  Mousetrap.bind('k',   function(){ scrollPage(true); });
  Mousetrap.bind('j',   function(){ scrollPage(false); });
  Mousetrap.bind('g g', function(){ if (!INSERT_MODE) $(document).scrollTop(0); })
  Mousetrap.bind('G',   function(){ if (!INSERT_MODE) $(document).scrollTop(document.body.scrollHeight); })
}
