function getSVG(pathList, size, opt_type, w, h, precision) {
  size = size || 1;
  precision = (precision !== undefined && precision !== null) ? precision : 3;

  function fmt(val) {
    var n = (val * size);
    // Strip trailing zeros: 12.300 -> 12.3, 12.000 -> 12
    return parseFloat(n.toFixed(precision)).toString();
  }

  function path(curve) {

    function bezier(i) {
      var b = 'C ' + fmt(curve.c[i * 3 + 0].x) + ' ' +
          fmt(curve.c[i * 3 + 0].y) + ',';
      b += fmt(curve.c[i * 3 + 1].x) + ' ' +
          fmt(curve.c[i * 3 + 1].y) + ',';
      b += fmt(curve.c[i * 3 + 2].x) + ' ' +
          fmt(curve.c[i * 3 + 2].y) + ' ';
      return b;
    }

    function segment(i) {
      var s = 'L ' + fmt(curve.c[i * 3 + 1].x) + ' ' +
          fmt(curve.c[i * 3 + 1].y) + ' ';
      s += fmt(curve.c[i * 3 + 2].x) + ' ' +
          fmt(curve.c[i * 3 + 2].y) + ' ';
      return s;
    }

    var n = curve.n, i;
    var p = 'M' + fmt(curve.c[(n - 1) * 3 + 2].x) +
        ' ' + fmt(curve.c[(n - 1) * 3 + 2].y) + ' ';
    for (i = 0; i < n; i++) {
      if (curve.tag[i] === "CURVE") {
        p += bezier(i);
      } else if (curve.tag[i] === "CORNER") {
        p += segment(i);
      }
    }
    return p;
  }

  w = w || 100;
  h = h || 100;
  var len = pathList.length, c, i, strokec, fillc, fillrule;

  var svg = '<svg id="svg" version="1.1" width="' + w + '" height="' + h +
      '" xmlns="http://www.w3.org/2000/svg">';
  svg += '<path d="';
  for (i = 0; i < len; i++) {
    c = pathList[i].curve;
    svg += path(c);
  }
  if (opt_type === "curve") {
    strokec = "black";
    fillc = "none";
    fillrule = '';
  } else {
    strokec = "none";
    fillc = "black";
    fillrule = ' fill-rule="evenodd"';
  }
  svg += '" stroke="' + strokec + '" fill="' + fillc + '"' + fillrule + '/></svg>';
  return svg;
}

export default getSVG;
