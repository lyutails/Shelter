
const main_slider_pets = document.querySelector("#slider_pets");

//modal 1280

class Modal {
    constructor (classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseButton = '';
        this.overlay = '';
    }    

    buildModal(content) {
        //overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

        //modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal', 'overlay', this.classes);

        //modal content
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal_content');        

        //modal close button
        this.modalCloseButton = this.createDomNode(this.modalCloseButton, 'span', 'modal_close_icon');
        this.modalCloseButton.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'
        //this.modalCloseButton.innerHTML = '../../references/icons/cross_for_closing_modal_big';

        this.setContent(content);

        this.appendModalElements(content);

        //console.log(this.modal);

        //bind events
        this.bindEvents();

        //open modal
        this.openModal();        
    }    
    

    createDomNode (node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node 
    };

    setContent(content) {
        if (!content) return
        if(typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }

    appendModalElements(content) {
        this.modal.append(this.modalCloseButton);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents () {
        this.modalCloseButton.addEventListener('click', this.closeModal);        
        this.overlay.addEventListener('click', this.closeModal);
    }

    openModal () {
        document.body.append(this.overlay);   
        /*document.body.append = (e) => {
            e.preventDefault();
        }*/     
    }

    closeModal (e) {
        let classes = e.target.classList;
        if(classes.contains('overlay') || classes.contains('modal_close_icon')) {
            document.querySelector('.overlay').remove();
        }        
    }
    
}

window.onload = function() {
    //generate modal from modal class
    addPetsClickHandler();
}

const addPetsClickHandler = () => {
    document.querySelector('.carousel_moveit').addEventListener('click', () => {
        generateFriendsModal();
    });
    
};


const generateFriendsModal = () => {
    renderModalWindow('paste_content_here');
};

const renderModalWindow = (content) => {
    let modal = new Modal ('friends_modal');
    modal.buildModal(content);
};


//setting modal info

class InfoModal extends Modal {
constructor (classes, { pet_info, pet_name, pet_image, type, breed, description, parameters, age, inoculations, diseases, parasites }) {
    super(classes);
    this.id = id;
    this.pet_name = pet_name;
    this.img = pet_image;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
    this.pet_info = pet_info;
    this.parameters = parameters;    
}

generateModalContent() {
    let template = '';
    let info = document.createElement('div');
    info.className = 'modal_content';    
    info.setAttribute('id', this.id);

    this.img && 
    (template += `<img class="pet_image" src=${this.img} alt="pet_image_here">`)

    if (this.pet_info || this.pet_name || this.type || this.breed || this.description || this.age || this.inoculations || this.diseases || this.parasites) {
        template += `<div class="modal_content">`

        this.pet_info && 
        (template += `<div class="pet_info">${this.pet_info}</div>`)

        this.name && 
        (template += `<h3 class="pet_name">${this.pet_name}</h3>`)

        this.type && 
        (template += `<h4 class="type">${this.type}</h4>`)

        this.breed && 
        (template += `<h4 class="breed">${this.breed}</h4>`)

        this.description && 
        (template += `<p class="description">${this.description}</p>`)

        this.parameters &&
        (template += `<ul class="parameters">${this.parameters}</ul>`)

        this.age && 
        (template += `<li class="age">${this.age}</li>`)

        this.inoculations && 
        (template += `<li class="inoculations">${this.inoculations}</li>`)

        this.diseases && 
        (template += `<li class="diseases">${this.diseases}</li>`)

        this.parasites && 
        (template += `<li class="parasites">${this.parasites}</li>`)


        template += `</div>`
    }

        content.innerHTML = template;
        return content;
    }

    renderModal() {
        let modal_content = this.generateModalContent();        
        super.buildModal(modal_content);
    }
}


const renderModalContentToDom = () => {
    let infoWrapper = getInfoWrapper();
    generatePetInfo(data).forEach(modal_content => {
        infoWrapper.append(modal_content.generateModalContent())
    })

    addModalContentClickHandler();
}

const addModalContentClickHandler = () => {
    document.querySelector('.carousel_moveit').addEventListener('click', (e) => {
        if (e.target.closest('.slider')) {
            let clickedSliderId = e.target.closest('.slider').getAttribute('id');
            let clickedSliderData = getClickedData(clickedSliderId)

            renderModalContentWindow(clickedSliderData);
        }
    })
}


const getClickedData = (id) => {
    return data.find(slider => slider.id == id)
}

const renderModalContentWindow = (content) => {
    let modal = new InfoModal ('modal_content', content);  
    modal.renderModal();
}

//pets data array

const data = [
    { 
      id: 1,   
      pet_name: "Jennifer",
      pet_image: "../../references/pics/dogs/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 2,
      pet_name: "Sophia",
      pet_image: "../../references/pics/dogs/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 3,   
      pet_name: "Woody",
      pet_image: "../../references/pics/dogs/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      id: 4,
      pet_name: "Scarlett",
      pet_image: "../../references/pics/dogs/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 5,
      pet_name: "Katrine",
      pet_image: "../../references/pics/cats/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 6,
      pet_name: "Timmy",
      pet_image: "../../references/pics/cats/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      id: 7,
      pet_name: "Freddie",
      pet_image: "../../references/pics/cats/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 8,
      pet_name: "Charly",
      pet_image: "../../references/pics/dogs/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["none"]
    },
    {
      id: 9,
      pet_name: "Smol",
      pet_image: "../../references/pics/cats/pets-smol.png",
      type: "Kitten",
      breed: "brown tabby Mammal",
      description: "This pretty child, Smol, is three months old and he likes adults and kids. He isn’t fond of many other cats, so he might do best in a single cat home. Smol has lots of energy, and loves to run and play. We think a house with a lot of toys and people ready to play would make him very happy.",
      age: "3 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    }
  ]

//const petsData = JSON.parse(data);



//open close hamburger menu

const burger = document.querySelector('.hamburger_menu_button');
if (burger) {
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const overlayBody = document.querySelector('.overlay_body');
    const iconMenu = document.querySelector('.burger_menu_icon_outer');
    const body = document.querySelector('body');    

    burger.addEventListener("click", function(e) {
        burger.classList.toggle('active');
        menuBody.classList.toggle('active');
        overlayHeader.classList.toggle('active');
        overlayBody.classList.toggle('active');
        iconMenu.classList.toggle('active');
        body.classList.toggle('active');        
    });
}

const burgerMenuAbout = document.querySelector('.for_burger_about');
if (burgerMenuAbout) {
    const menuAbout = document.querySelector('.for_burger_about');    
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const overlayBody = document.querySelector('.overlay_body');
    const body = document.querySelector('body'); 

    burgerMenuAbout.addEventListener('click', function(e) {
        menuAbout.classList.toggle('active');        
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        overlayBody.classList.remove('active');
        body.classList.remove('active');  
    });
}

const burgerMenuPets = document.querySelector('.for_burger_pets');
if (burgerMenuPets) {
    const menuPets = document.querySelector('.for_burger_pets');    
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const overlayBody = document.querySelector('.overlay_body');
    const body = document.querySelector('body'); 

    burgerMenuPets.addEventListener('click', function(e) {
        menuPets.classList.toggle('active');        
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        overlayBody.classList.remove('active');
        body.classList.remove('active');  
    });
}

const burgerMenuHelp = document.querySelector('.for_burger_help');
if (burgerMenuHelp) {
    const menuHelp = document.querySelector('.for_burger_help');    
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const overlayBody = document.querySelector('.overlay_body');
    const body = document.querySelector('body'); 

    burgerMenuHelp.addEventListener('click', function(e) {
        menuHelp.classList.toggle('active');        
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        overlayBody.classList.remove('active');
        body.classList.remove('active');  
    });
}

const burgerMenuContacts = document.querySelector('.for_burger_contacts');
if (burgerMenuContacts) {
    const menuContacts = document.querySelector('.for_burger_contacts');    
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const overlayBody = document.querySelector('.overlay_body');
    const body = document.querySelector('body'); 

    burgerMenuContacts.addEventListener('click', function(e) {
        menuContacts.classList.toggle('active');        
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        overlayBody.classList.remove('active');
        body.classList.remove('active');  
    });
}


const burgerOverlayBody = document.querySelector('.overlay_body');
if (burgerOverlayBody) {    
    const overlayBody = document.querySelector('.overlay_body');
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const body = document.querySelector('body'); 

    burgerOverlayBody.addEventListener('click', function(e) {        
        overlayBody.classList.remove('active');
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        body.classList.remove('active'); 
    });
}

const burgerOverlayHeader = document.querySelector('.overlay_header');
if (burgerOverlayBody) {    
    const overlayBody = document.querySelector('.overlay_body');
    const menuBody = document.querySelector('.burger_wrapper');
    const overlayHeader = document.querySelector('.overlay_header');
    const body = document.querySelector('body'); 

    burgerOverlayHeader.addEventListener('click', function(e) {        
        overlayBody.classList.remove('active');
        menuBody.classList.remove('active');
        overlayHeader.classList.remove('active');
        body.classList.remove('active'); 
    });
}



//highlight modal's closing button when hover over overlay


const whenOverlayModalButtonHighlight = document.querySelector('.overlay');
if (whenOverlayModalButtonHighlight) {     
    const modalButton = document.querySelector('.modal_close_icon');
    const modalOverlay = document.querySelector('.overlay');

    whenOverlayModalButtonHighlight.addEventListener('mouseover', function(e) {         
        modalButton.classList.toggle('active'); 
        modalOverlay.classList.toggle('.overlay');
    });
};


//carousel move it

