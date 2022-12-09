function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function GiveCookie() {
    let user = getCookie("key");
    if (user != "") {
        console.log("Welcome Back")
    } else {
        checkotherCookie();
    }
  }
  function checkotherCookie() {
    let user = getCookie("key");
    var key = prompt("What is key", "fard");
    if (key == "aGlzdG9yeQ==") {
        user = "key";
        setCookie("key", user, 30);
    } else {
      window.location.assign("https://google.com");
    }
  }