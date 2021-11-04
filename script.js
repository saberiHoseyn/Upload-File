

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


        //Make XMLHttpRequests by package "axios"
        //The post axios returns a promise in follow-up
        axios.post("https://jsonplaceholder.typicode.com/users1",// the server URL of the post request 
                    JSON.stringify(formdata),//the data of request "post"
                    {onUploadProgress : progressHandler})//the native progress event calls function "progressHandler"
                    .then(response=> console.log(response))//getting the response
                    .catch(error=> console.log(error));//getting the error

    }

    
    function progressHandler(event) {
        let percent = Math.round((event.loaded / event.total)*100);
        progressBar.style.width = `${percent}%`;
        progressBar.innerHTML = `${percent}%`;
    }
}); 