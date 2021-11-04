

const form = document.querySelector("#form-upload");
let progress = document.querySelector("#progress");
let progressBar = progress.querySelector(".progress-bar"); 




//setting event listener over the form for "submit" request
form.addEventListener("submit" , function(event){
    event.preventDefault();

    //Selected the file uploaded into the input by name="file"
    let file = this.querySelector("#fileUpload").files[0]
    

    //if the file uploaded into the input existing...
    if(file){
        progress.classList.remove("d-none");

        //the formData of javascript initialize a variable for getting the file.
        let formdata = new FormData();
        formdata.append("File" , file);


        let ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress" , progressHandler);
        ajax.addEventListener("load" , completeHandler);


        ajax.open("POST" , "https://jsonplaceholder.typicode.com/users");
        ajax.setRequestHeader("content-type" , "aplication/json; charset=UTF-8");
        ajax.send(JSON.stringify(formdata));
    }

    function progressHandler(event) {
        let percent = Math.round((event.loaded / event.total)*100);
        progressBar.style.width = `${percent}%`;
        progressBar.innerHTML = `${percent}%`;
    }

    function completeHandler(){
        console.log("complited");
    }
}); 