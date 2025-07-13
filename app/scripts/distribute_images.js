// Array of image sources - This will now be defined in the HTML page (e.g., urban.html, nature.html)
// const images = [
//     '3f5d503317090d574dd337b962c4de55.jpg',
//     '2fead549f514a617c2cd80e5e84a181a.jpg',
//     "e1254e91ea3d513c23d8f0e6ff5933c2.jpg",
//     '0c03cd01ccbed553855f9e5a78623944.jpg',
//     'cc43578346e895df17377fd6f26d2846.jpg',
//     '2642d23ff676a130d2bee78ca6871202.jpg',
//     '66a4a47397be4cad96a3193b0c965184.jpg',
//     "2dc0aa17301bf99defb13a5ef7573edb.jpg",
//     "643e86c5ebc09ecff888f38d5f657337.jpg",
//     '1a2eab6421f26dd76598d9f0423782e5.jpg',
//     "341fc8c62ccf53d195e45b6ea05be44f.jpg",
//     "ed136a36e32307a50635156d3f258cc2.jpg",
//     '0164bf1247e13543cd2d0a26e7691367.jpg',
//     'c00d1bd764c3a107c89f3d8ee107c5c3.jpg',
//     'b8d1f294b9e06833a564914ae83df31e.jpg',
//     'e70e35778a37b8e1ed6a9a5862527095.jpg',
//     'fc27f37869834bc0584685d0d91e8194.jpg',
//     '94ad6a6e79bca6f73b81391f1623176e.jpg',
//     '8a91828221bf5d45ffcd9cad488fa21b.jpg',
//     'afce505ee923b058ff93a7ca3a461d4e.jpg',
//     'cea7f2c357abbf1b9073900e394dddcf.jpg',
//     '9807c86bafaf38cc6b849b0971496c6f.jpg',
//     'c385597743532c6b13ef66495ca7e3b9.jpg',
//     '1843a4e237bbdd6940955c83c5a52f00.jpg',
//     'e7e36093b634e2008076df9a78fc43aa.jpg',
//     'a839318431fdf8039d71a8f970987603.jpg',
// ];

const twoColumnThreshold = 640;
const threeColumnThreshold = 1280;

// Function to distribute images into columns
function distributeImages() {
    const gallery = document.getElementById('gallery');

    // Ensure images array is defined globally in the HTML page
    if (typeof images === 'undefined' || !Array.isArray(images)) {
        console.error('Image array not found or is not an array. Please define "const images = [...]" in your HTML before this script.');
        return;
    }

    gallery.innerHTML = ''; // Clear existing content
    // Get the number of columns based on the current screen size
    let columnCount = 1;
    if (window.innerWidth >= threeColumnThreshold) {
        columnCount = 3;
    }
    else if (window.innerWidth >= twoColumnThreshold) {
        columnCount = 2;
    }

    // Create columns
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add("flex", "flex-col", "gap-y-9");
        columns.push(column);
        gallery.appendChild(column);
    }

    images.forEach((src, index) => {
        const hyperlink = document.createElement('a');
        const img = document.createElement('img');
        img.src = `images/thumbnail/${src}`;
        hyperlink.href = `images/lightbox/${src}`;
        hyperlink.setAttribute('data-lightbox', 'gallery');
        hyperlink.appendChild(img);
        columns[index % columnCount].appendChild(hyperlink);
    });
}


// Initial distribution
distributeImages();
// Redistribute images on window resize
window.addEventListener('resize', distributeImages);
