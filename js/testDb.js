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
    "https://31.187.72.184:8080/test/hello"
  );
  console.log("Real backend with IP OK - http - http");
} catch (error) {
  console.log("Real backend not accessed with IP - http - http");
  console.log(error);
}

try {
  document.getElementById("testDbrealPort").textContent = httpGet(
    "https://server.sylvainjanet.fr:8080/test/hello"
  );
  console.log("Real backend with adress and port OK - http - http");
} catch (error) {
  console.log("Real backend not accessed with adress and port - http - http");
  console.log(error);
}

try {
  document.getElementById("testDbreal").textContent = httpGet(
    "http://server.sylvainjanet.fr/test/hello"
  );
  console.log("Real backend with adress OK - http");
} catch (error) {
  console.log("Real backend not accessed with adress - http");
  console.log(error);
}

try {
  document.getElementById("testDbrealIPhttps").textContent = httpGet(
    "https://31.187.72.184:8443/test/hello"
  );
  console.log("Real backend with IP OK - https");
} catch (error) {
  console.log("Real backend not accessed with IP - https");
  console.log(error);
}

try {
  document.getElementById("testDbrealPorthttps").textContent = httpGet(
    "https://server.sylvainjanet.fr:8443/test/hello"
  );
  console.log("Real backend with adress and port OK - https");
} catch (error) {
  console.log("Real backend not accessed with adress and port - https");
  console.log(error);
}

try {
  document.getElementById("testDbrealhttps").textContent = httpGet(
    "https://server.sylvainjanet.fr/test/hello"
  );
  console.log("Real backend with adress OK - https");
} catch (error) {
  console.log("Real backend not accessed with adress - https - https");
  console.log(error);
}
