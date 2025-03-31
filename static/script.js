// copyright footer
function showCopyright(){
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById("footerInfo").innerHTML = "Copyright©" + year;
}

// nav bar color change when hover
$(document).ready(function(){
  $("a.navTitle").hover(function(){
    $(this).css("background-color", "#e9e6e2");
    $(this).css("color", "#31352e");
    }, function(){
    $(this).css("background-color", "#535e4b");
    $(this).css("color", "#ebebe8");
  });
});

// show map
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(40.440523405936744, -80.01734476139315),
    zoom:15,
  };
  var map = new google.maps.Map(document.getElementById("location"),mapProp);
  const marker = new google.maps.Marker({
    map,
    position: { lat: 40.440523405936744, lng: -80.01734476139315 },
  });
}

function validate(){
    let userName = document.getElementById("fullname");
    let userEmail = document.getElementById("email");
    if (!userName.checkValidity() || !userEmail.checkValidity()) {
        document.getElementById("failValidate").innerHTML = "Please fill out all the fields in the form.";
    }
}