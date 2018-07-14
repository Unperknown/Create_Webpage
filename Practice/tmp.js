function toggle(font_clr, back_clr, val, location) {
  var all = document.querySelector('body').style;
  all.color=font_clr;
  all.backgroundColor=back_clr;
  document.querySelector(location).value=val;
}
function colorToggle() {
  if (isValue('Default')) {
    toggle('powderblue', 'black', 'Night', '.button');
  } else if (isValue('Night')) {
    toggle('SkyBlue', 'LightCyan', 'Calmness', '.button');
  } else if (isValue('Calmness')) {
    toggle('purple', 'violet', 'Lovely', '.button');
  } else if (isValue('Lovely')) {
    toggle('black', 'white', 'Default', '.button');
  }
}

function isValue(val) {
  return document.querySelector('input').value == val ? true : false;
}
