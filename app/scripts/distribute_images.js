// Array of image sources
const images = [
    '3f5d503317090d574dd337b962c4de55.jpg',
    '2fead549f514a617c2cd80e5e84a181a.jpg',
    '0c03cd01ccbed553855f9e5a78623944.jpg',
    '1a2eab6421f26dd76598d9f0423782e5.jpg',
    '2642d23ff676a130d2bee78ca6871202.jpg',
    '66a4a47397be4cad96a3193b0c965184.jpg',
    '5ea6a6f6c1280b1d9ebe693ffeb60add.jpg',
    '9c2e7e4f9777b9815c0cf267128e1c28.jpg',
    '6533e0f15ed2457fba2f3de4338606ad.jpg',
    '024013db03677c1f528526ccff00f7eb.jpg',
    'cc43578346e895df17377fd6f26d2846.jpg',
    '20965738acfe7f160e7d2b425c7029f3.jpg',
    'c00d1bd764c3a107c89f3d8ee107c5c3.jpg',
    '0164bf1247e13543cd2d0a26e7691367.jpg',
    'e70e35778a37b8e1ed6a9a5862527095.jpg',
    'b8d1f294b9e06833a564914ae83df31e.jpg',
    '11d80f52c00e9932f1f4134fc84b479a.jpg',
    '94ad6a6e79bca6f73b81391f1623176e.jpg',
    '8a91828221bf5d45ffcd9cad488fa21b.jpg',
    '9807c86bafaf38cc6b849b0971496c6f.jpg',
    'afce505ee923b058ff93a7ca3a461d4e.jpg',
    'c385597743532c6b13ef66495ca7e3b9.jpg',
    '1843a4e237bbdd6940955c83c5a52f00.jpg',
    'cea7f2c357abbf1b9073900e394dddcf.jpg',
    '7baaa77a78633556426078769565b624.jpg',
    'e7e36093b634e2008076df9a78fc43aa.jpg',
    'a839318431fdf8039d71a8f970987603.jpg',
    'f88d2cb5f4d151459164b1f66b13fc8e.jpg',
];

const twoColumnThreshold = 640;
const threeColumnThreshold = 768;

// Function to distribute images into columns
function distributeImages() {
    const gallery = document.getElementById('gallery');

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
        column.classList.add("flex", "flex-col", "gap-y-5");
        columns.push(column);
        gallery.appendChild(column);
    }

    images.forEach((src, index) => {
        const hyperlink = document.createElement('a');
        const img = document.createElement('img');
        img.src = `/images/thumbnail/${src}`;
        hyperlink.href = `/images/lightbox/${src}`;
        hyperlink.setAttribute('data-lightbox', 'gallery');
        hyperlink.appendChild(img);
        columns[index % columnCount].appendChild(hyperlink);
    });
}


// Initial distribution
distributeImages();
// Redistribute images on window resize
window.addEventListener('resize', distributeImages);
