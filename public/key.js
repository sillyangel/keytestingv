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

  function checkCookie() {
    var key = prompt("What is key", "Get key at my very private discord account");
    if (key != "aGlzdG9yeQ==") {
      realcheckCookie()
    } else {
      window.location.assign("https://google.com");
    }
  }
  function realcheckCookie() {
    let user = getCookie("key");
    if (user != "") {
      console.log("user got the key right");
    } else {
      user = "key";
      setCookie("key", user, 30);
    }
  }