let send = (id) => {
  // var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "save.php", true);
  // xhttp.setRequestHeader("Content-Type", "application/json");
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     // Response
  //     var response = this.responseText;
  //   }
  // };

  var data = { name: id };
  //xhttp.send(id);
  //  xhttp.send(JSON.stringify(data));
  $.ajax({
    url: "save.php",
    type: "post",
    data: { name: id },
  });
};
