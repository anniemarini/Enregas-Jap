function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    
    //console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //console.log('Full Name: ' + profile.getName());
    //console.log('Given Name: ' + profile.getGivenName());
    //console.log('Family Name: ' + profile.getFamilyName());
    //console.log("Image URL: " + profile.getImageUrl());
    //console.log("Email: " + profile.getEmail());


    //var id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);

    let usuario = {};
    usuario.nombre = profile.getName();
    usuario.estado = "conectado"
    localStorage.setItem("usuario", JSON.stringify (usuario));
    location.href = "index.html"

  }


  function signOut(){
    
    var auth2 = gapi.auth2.getAuthInstance();
    
    auth2.signOut().then(function(){
       auth2.desconectar();
       console.log("User signed Out.");
    });
  }

  function onLoad(){
    alert ("Hola");
    gapi.load('auth2', function(){
        gapi.auth2.init();
    });
  }

