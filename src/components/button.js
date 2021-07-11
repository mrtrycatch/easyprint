var body = document.getElementsByTagName('body')[0];

var buttonPrint = document.createElement('button')
buttonPrint.innerHTML = "Capturar";
buttonPrint.setAttribute('id', 'buttonPrint');

body.appendChild(buttonPrint);


buttonPrint.setAttribute('style', 'position: fixed; width: 60px; height: 60px; border-radius: 30px; background-color: #000; right: 0; bottom: 0; z-index: 20; color: #fff; margin: 10px');