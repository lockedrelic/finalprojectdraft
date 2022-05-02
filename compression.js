
const inputUpload = document.getElementById("button1");

inputUpload.addEventListener('click', function () {
  const curfile = document.getElementById("file-upload").files[0];
  const divElement = document.createElement("div");
  divElement.id = "uploaded-file";
  var _name = curfile.name;
  var _type = curfile.type;
  
  divElement.style.marginTop = "420px";
  divElement.style.textAlign = "center";
  divElement.style.fontWeight = "bold";
  divElement.style.fontSize = "smaller";
  divElement.style.paddingTop = "15px";

  var fileInfo = document.createElement("P");
  fileInfo.appendChild(document.createTextNode(_name));
  fileInfo.appendChild(document.createTextNode("    " + _type));
  divElement.appendChild(fileInfo);
  
  // delete button for deleting the div
  var deleteButton = document.createElement("Button");
  var textForButton = document.createTextNode("Delete");
  deleteButton.appendChild(textForButton);
  deleteButton.addEventListener("click", function() {
    divElement.remove();
  });
  divElement.appendChild(deleteButton);


  var startButton = document.createElement("Button");
  var textForButton2 = document.createTextNode("Start");
  startButton.appendChild(textForButton2);
  startButton.addEventListener("click", function(){
      activateStart();
  });
  divElement.appendChild(startButton);

  document.getElementsByTagName("body")[0].appendChild(divElement);

});

// this function needs to be changed: needs to compress the file and save it to the appropriate compressed folder
const activateStart = async () => {
    const compressedDiv = document.createElement("div");

    var text = document.createTextNode("File Compressed Successfully");
    compressedDiv.style.textAlign = "center";
    compressedDiv.style.marginTop = "420px";
    compressedDiv.style.fontFamily = "'Quicksand', sans-serif";
    
    
    // change how you get the file and also run the python script on it and save it to the folder.
    // use await()
    const file = document.getElementById("file-upload").files[0];
    var prevname = file.name;
    file.name = "input";
    // file = runpythonscript(file);
    // save(file)

    const prevElement = document.getElementById("uploaded-file");
    prevElement.remove();

    // if it doesn't work properly: 
    // text = document.createTextNode("File Could Not Be Compressed");
    compressedDiv.appendChild(text);
    document.getElementsByTagName("body")[0].appendChild(compressedDiv);

}

const startButton = document.getElementById('startButton');
