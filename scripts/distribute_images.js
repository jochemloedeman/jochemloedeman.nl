// Array of image sources
const images = [
    '/assets/images/P1070378-Enhanced-RD Large.jpeg',
    '/assets/images/DSCF4429-Enhanced-RD Large.jpeg',
    '/assets/images/P1070333-Enhanced-RD Large.jpeg',
    '/assets/images/DSCF4744-Enhanced-RD Large.jpeg',
    '/assets/images/P1070384-Enhanced-RD Large.jpeg',
    '/assets/images/DSC09328-Enhanced-NR Large.jpeg',
    '/assets/images/P1070444 Large.jpeg',
    '/assets/images/DSCF4570-Enhanced-RD-2 Large.jpeg',
    '/assets/images/P1070347-Enhanced-RD Large.jpeg',
    '/assets/images/DSCF4602-Enhanced-RD-2 Large.jpeg',
    '/assets/images/P1070303-Enhanced-RD Large.jpeg',
    '/assets/images/DSC08987 Large.jpeg',
    '/assets/images/DSC08870 Large.jpeg',
    '/assets/images/DSC09061 Large.jpeg',
    '/assets/images/DSCF4667-Enhanced-RD Large.jpeg',
    '/assets/images/DSCF4310-Enhanced-RD Large.jpeg',
];

const twoColumnThreshold = 768;

const threeColumnThreshold = 1024;

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
        const img = document.createElement('img');
        img.src = src;
        columns[index % columnCount].appendChild(img);
    });
}


// Initial distribution
distributeImages();

// Redistribute images on window resize
window.addEventListener('resize', distributeImages);
