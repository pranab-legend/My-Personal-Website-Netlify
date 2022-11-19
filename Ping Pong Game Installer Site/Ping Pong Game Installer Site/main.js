const download_64_bit_btn = document.getElementById("64-bit-download-link-btn");


function download (file) {
    const linkClick = document.getElementById("64-bit-download-link")
    linkClick.setAttribute("download", file);
    linkClick.click();
    console.log('downloadign')
    console.log(linkClick)
}

download_64_bit_btn.onclick = () => {
    download('https://github.com/pranab-legend/Godly-Ping-Pong-Installer');
    console.log('clck')
}