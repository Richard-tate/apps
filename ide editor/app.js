const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const code = document.getElementById("code").contentWindow.document;
const but = document.querySelector('.run');
but.addEventListener('click', compile)
    
  function compile () {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    }
  
  