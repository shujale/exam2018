var checkOpenStatus = function() {
  var d = new Date();
  var date = d.getHours();
  var day = d.getDay();

  if ((date > 9) && (date < 21) && (day != 0)) {
    document.getElementById("open-close-box").style.background = '#58ae5c';
    y = "<span>Åben for i dag</span>";
  } else {
    document.getElementById("open-close-box").style.background = '#d03837';
    y = "<span>Lukket for i dag</span>";
  }
  document.getElementById("open-close-box").innerHTML = y;
  setTimeout(checkOpenStatus, 15000);
};

checkOpenStatus();
