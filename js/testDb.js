function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }
  try {
    document.getElementById("testDblocal").textContent = httpGet(
      "http://localhost:8080/hello"
    );
    console.log("Local backend OK");
  } catch (error) {
    console.log("Local backend not accessed");
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
    console.log("Real backend not accessed with adress - https - https - https");
    console.log(error);
  }

    
  try {
    document.getElementById("testDbrealdevPorthttps").textContent = httpGet(
      "https://server.sylvainjanet.fr:8443/test-dev/hello"
    );
    console.log("Real dev backend with adress and port OK - https");
  } catch (error) {
    console.log("Real dev backend not accessed with adress and port - https");
    console.log(error);
  }
  
  try {
    document.getElementById("testDbrealdevhttps").textContent = httpGet(
      "https://server.sylvainjanet.fr/test-dev/hello"
    );
    console.log("Real dev backend with adress OK - https");
  } catch (error) {
    console.log("Real dev backend not accessed with adress - https - https - https");
    console.log(error);
  }