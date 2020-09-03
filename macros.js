remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.credit = function(color, name) {
  var url = this;
  return '<p style="position: absolute; bottom: 0; font-size: 1em; color:' + color + ';">' + name + ' | ' + '<a style="color:' + color + '" href="' + url + '">'+ url + '</a></p>';
};

remark.macros.url = function(color) {
  var url = this;
  return '<p style="position: absolute; bottom: 0; font-size: 1em; color:' + color + ';">' + '<a style="color:' + color + '" href="' + url + '">'+ url + '</a></p>';
};
