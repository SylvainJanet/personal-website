function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
try {
  document.getElementById("testDblocal").textContent = httpGet(
    "http://localhost:4040/hello"
  );
  console.log("Local backend OK");
} catch (error) {
  console.log("Local backend not accessed");
  console.log(error);
}

try {
  document.getElementById("testDbrealIP").textContent = httpGet(
    "http://31.187.72.184:8080/test/hello"
  );
  console.log("Real backend with IP OK");
} catch (error) {
  console.log("Real backend not accessed with IP");
  console.log(error);
}

try {
  document.getElementById("testDbrealPort").textContent = httpGet(
    "http://server.sylvainjanet.fr:8080/test/hello"
  );
  console.log("Real backend with adress and port OK");
} catch (error) {
  console.log("Real backend not accessed with adress and port");
  console.log(error);
}

try {
  document.getElementById("testDbreal").textContent = httpGet(
    "http://server.sylvainjanet.fr/test/hello"
  );
  console.log("Real backend with adress OK");
} catch (error) {
  console.log("Real backend not accessed with adress");
  console.log(error);
}
