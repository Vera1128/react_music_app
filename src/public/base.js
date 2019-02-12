/**
 * Created by yangyang.xu on 2018/8/2.
 */
function adaptation () {
  var clientWidth = window.screen.width;
  var dpr = window.devicePixelRatio;
  var vp = document.createElement('meta');
  document.documentElement.style.fontSize = clientWidth > 414 ? '20px' : 20 * dpr * clientWidth / 360 + 'px';
  vp.name = 'viewport';
  vp.content = `initial-scale=${1.0 * 1 / dpr}, maximum-scale=${1.0 * 1 / dpr}, minimum-scale=${1.0 * 1 / dpr}, user-scalable=no, width=device-width`;
  var m = document.getElementsByTagName('meta')[0];
  m.parentNode.insertBefore(vp, m);
}
adaptation();