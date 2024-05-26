// * DARK MODE

const body = document.querySelector("body");
        const toggleBtn = document.querySelector(".es-toggle");
            let getMode = localStorage.getItem("mode");
            if (getMode && getMode === "dark") {
                body.classList.add("dark");
                body.classList.add("active");
            }
            
        toggleBtn.addEventListener("click",() => {
            body.classList.toggle("dark");

            if (!body.classList.contains("dark")) {
                return localStorage.setItem("mode" ,"light");
                
            }
            else
                return localStorage.setItem("mode" ,"dark");
        })
        toggleBtn.addEventListener("click",() => toggleBtn.classList.toggle("active")) ;


//* MODALS
function openModal() {
    document.getElementById('es-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('es-modal').style.display = 'none';
}
// * ALERT
document.addEventListener('DOMContentLoaded', () => {
    
    const showAlertButton = document.querySelector('.es-alert-btn');
    const alertDiv = document.querySelector('.es-alert');
    const closeBtn = alertDiv.querySelector('.es-close-btn');

    let hideTimeout;

    // Function to show the alert
    function showAlert() {
        clearTimeout(hideTimeout); // Clear any existing timeout
        alertDiv.classList.remove('hide'); // Remove the hide class if it exists
        alertDiv.style.display = 'flex'; // Change to 'flex' to show the alert

        // Set a timeout to hide the alert after 5 seconds
        hideTimeout = setTimeout(hideAlert, 5000);
    }

    // Function to hide the alert
    function hideAlert() {
        alertDiv.classList.add('hide'); // Add the hide class to start the animation

        // Use a timeout to set display to 'none' after the animation completes
        setTimeout(() => {
            alertDiv.style.display = 'none';
            alertDiv.classList.remove('hide'); // Remove the hide class after hiding
        }, 1000); 
    }

    // Add event listeners
    showAlertButton.addEventListener('click', showAlert);
    closeBtn.addEventListener('click', hideAlert);

    // Initially hide the alert
    hideAlert();
});




// * TABS
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("es-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("es-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// * ACCORDIONS


const esAccordionContent = document.querySelectorAll(".es-accordion-content");
esAccordionContent.forEach((item,index) => {
    let header = item.querySelector("header");
    header.addEventListener("click",() =>{
        item.classList.toggle("open");

        let description = item.querySelector(".descriptions")

        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");

        }
        removeOpen(index); //calling the function and also passing the index number of the clicked header 
    })
})
function removeOpen(index1) {
    esAccordionContent.forEach((item2,index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".descriptions");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");



        }
    })
}

// * COLLAPSE

function toggleCollapse() {
    const content = document.getElementById('es-collapse');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
// * POPOVERS
    function togglePopover() {
        const popover = document.getElementById('es-popover');
        popover.style.display = popover.style.display === 'block' ? 'none' : 'block';
    }

    // * CAROUSEL

    let currentSlide = 0;
    const slides = document.querySelectorAll('.es-carousel-item');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
