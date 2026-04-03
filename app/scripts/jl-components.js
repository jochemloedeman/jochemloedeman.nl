// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Navbar Component
    class JLNavbar extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <header class="flex w-full overflow-hidden pt-12 pb-4">
                    <div class="w-full mx-auto flex">
                        <div class="text-gray-900 text-lg xs:text-2xl sm:text-4xl font-semibold font-poppins whitespace-nowrap">
                            JOCHEM LOEDEMAN.
                        </div>
                        <div class="flex w-full justify-end">
                            <div class="flex text-gray-600 items-center">
                                <a class="transition duration-300 font-poppins font-medium text-sm xs:text-lg text-gray-900 hover:text-gray-500" href="/">
                                    portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            `;
        }
    }

    // Footer Component
    class JLFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <footer class="pb-10 pt-4">
                    <div class="w-full mx-auto max-w-7xl">
                        <div class="flex justify-center mb-4">
                            <div class="flex space-x-3 xs:space-x-5 text-gray-600 items-center">
                                <a class="transition duration-300 hover:opacity-75"
                                    href="https://www.linkedin.com/in/jochem-loedeman-811322124" target="_blank"
                                    rel="noreferrer">
                                    <svg class="w-4 h-4 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a class="transition duration-300 hover:opacity-75" href="https://www.github.com/jochemloedeman"
                                    target="_blank" rel="noreferrer">
                                    <svg class="w-4 h-4 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>
                                <a class="transition duration-300 hover:opacity-75" href="https://www.instagram.com/jochemloedeman"
                                    target="_blank" rel="noreferrer">
                                    <svg class="w-4 h-4 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                                <a class="transition duration-300 hover:opacity-75" href="https://the.fotoapp.co/jochemloedeman"
                                    target="_blank" rel="noreferrer">
                                    <svg class="w-4 h-4 xs:w-6 xs:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <defs>
                                            <mask id="m">
                                                <rect width="512" height="512" fill="white"/>
                                                <g transform="translate(0,512) scale(0.03413,-0.03413)" fill="black">
                                                    <path d="M8255 12065 c-476 -68 -847 -251 -1156 -572 -322 -335 -538 -776 -647 -1323 -61 -302 -82 -567 -82 -1027 l0 -292 -427 -3 c-488 -4 -494 -5 -528 -73 -29 -60 -28 -215 2 -270 28 -52 62 -83 104 -95 19 -6 206 -10 441 -10 l408 0 0 -1962 c-1 -1145 -5 -2007 -10 -2068 -8 -89 -15 -116 -45 -176 -84 -170 -203 -229 -489 -240 -172 -7 -249 -20 -274 -47 -63 -69 -53 -271 17 -346 45 -48 77 -51 324 -33 313 24 1902 24 2261 0 251 -16 282 -14 322 23 71 67 88 272 29 353 -21 27 -115 46 -240 46 -147 0 -380 18 -470 35 -184 35 -284 137 -320 326 -31 164 -35 417 -35 2251 l0 1838 658 2 659 3 36 27 c51 40 89 123 89 195 0 65 -16 134 -38 168 -30 46 -59 48 -749 54 l-650 6 2 605 c3 768 16 951 94 1327 95 456 300 758 586 863 112 40 210 53 360 48 206 -8 322 -58 469 -203 136 -134 196 -291 180 -473 -17 -206 -104 -366 -295 -542 -68 -63 -101 -101 -101 -115 0 -50 138 -198 221 -239 90 -43 172 -59 299 -59 312 1 520 137 661 430 62 130 90 245 96 403 11 274 -54 459 -230 661 -208 238 -516 407 -881 485 -104 22 -152 26 -336 30 -149 2 -245 -1 -315 -11z"/>
                                                </g>
                                            </mask>
                                        </defs>
                                        <circle cx="256" cy="256" r="256" fill="currentColor" mask="url(#m)"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p class="mt-8 text-xs text-gray-600 text-center">
                            © 2025
                            <a href="https://www.linkedin.com/in/jochem-loedeman-811322124" class="">Jochem Loedeman</a>
                        </p>
                    </div>
                </footer>
            `;
        }
    }

    // Gallery Component
    class JLGallery extends HTMLElement {
        connectedCallback() {
            const dataFile = this.getAttribute('data-file');
            const errorType = this.getAttribute('error-type') || 'images';

            this.innerHTML = `
                <div id="gallery" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-8">
                </div>
            `;

            // Load images from JSON file
            fetch(`data/${dataFile}`)
                .then(response => response.json())
                .then(data => {
                    window.images = data;
                    if (typeof distributeImages === 'function') {
                        distributeImages();
                    } else {
                        console.error('distributeImages function not found. Make sure distribute_images.js is loaded correctly.');
                    }
                })
                .catch(error => console.error(`Error loading ${errorType}:`, error));
        }
    }

    // Register components
    customElements.define('jl-navbar', JLNavbar);
    customElements.define('jl-footer', JLFooter);
    customElements.define('jl-gallery', JLGallery);
});
