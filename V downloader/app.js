// variables

const fileInput = document.querySelector("input");
console.log(fileInput);
const download = document.querySelector("button");
console.log(download);

download.addEventListener("click", e => {
    e.preventDefault();
    download.innerText = "Downloading..."
    fetchFile(fileInput.value);
})

function fetchFile(url) {
    //fetch file and returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        
        //URL.createObjURL creates a url of passed object

        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        download.innerText = "Download";
        fileInput.value = ""
    });
}