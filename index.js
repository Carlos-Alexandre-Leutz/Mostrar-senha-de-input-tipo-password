  const mostrarSenha = () => {
      let inputPassword = document.getElementById("password");

      if (inputPassword.getAttribute("type") == "password") {
        inputPassword.setAttribute("type", "text");
      } else {
        inputPassword.setAttribute("type", "password");
      }
    };
