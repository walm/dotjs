// this will be run on every site
console.log('DotJS is on');

// remove ads
var ads = $('iframe[id*="aswift"], .ads');
if (ads.length > 1) {
  console.log("DotJS: Removing ads", ads);
  ads.remove();
}
