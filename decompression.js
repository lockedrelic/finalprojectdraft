
const inputDecompress = document.getElementById("linkbutton");

// not necessary for implementation: could add this back in the decompress.html file: <button class = "button" id = "linkbutton" >Decompress</button>
// none of this is currently being used everything can be implemented within decompress.html
inputDecompress.addEventListener('click', function() {
    const divElement = document.createElement("div");
    divElement.id = "linked-file";
    divElement.style.marginTop = "420px";
    divElement.style.textAlign = "center";
    divElement.style.fontWeight = "bold";
    divElement.style.fontSize = "smaller";
    divElement.style.paddingTop = "15px";
  
    // reset button for resetting
    var resetButton = document.createElement("Button");
    var textForButton = document.createTextNode("Reset");
    resetButton.appendChild(textForButton);
    resetButton.addEventListener("click", function(){
        divElement.remove();
    });
    divElement.appendChild(resetButton);

    document.getElementsByTagName("body")[0].appendChild(divElement);
});

downloadButton.addEventListener("click", function(){
    
});

// example of how to download a file to local computer from the server
const downloadFile = document.getElementById();
const link = document.getElementById('link');
let objectURL;

downloadFile.addEventListener('change', function () {
  if (objectURL) {
    URL.revokeObjectURL(objectURL);  
  }

  const file = this.files[0];  objectURL = URL.createObjectURL(file);

  link.href = objectURL;
  link.click();
});