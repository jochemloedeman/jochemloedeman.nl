// Array of image sources
const images = [
    "image_12.jpg",
    "image_3.jpg",
    "image_14.jpg",
    "image_4.jpg",
    "image_21.jpg",
    "image_6.jpg",
    "image_9.jpg",
    "image_23.jpg",
    "image_5.jpg",
    "image_0.jpg",
    "image_7.jpg",
    "image_2.jpg",
    "image_8.jpg",
    "image_10.jpg",
    "image_13.jpg",
    "image_11.jpg",
    "image_19.jpg",
    "image_1.jpg",
    // "image_16.jpg",
    // "image_17.jpg",
    // "image_18.jpg",
    "image_22.jpg",
    "image_25.jpg",
    "image_20.jpg",
    "image_27.jpg",
    // "image_15.jpg",
    "image_24.jpg",
    // "image_26.jpg",
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
