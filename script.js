function uploadImage(){
    const file=
    document.getElementById("imageInput").files[0];
    const formData = new FormData();
    formData.append("file",file);

    document .getElementById("original").src=
    URL.createObjectURL(file);

     fetch("http://127.0.0.1:5000?upload",{
        method:"POST",
        body: formData    
    })
     .then(res => res.blob())
     .then(data => {
        document .getElementById("result").src=
        URL.createObjectURL(data);
     });
}