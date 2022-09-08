const main_pets_cards = document.querySelector("#pets_cards");



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
        } else{
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
    document.querySelector('.pets_cards').addEventListener('click', () => {
        generateFriendsModal();
    });
    
};


const generateFriendsModal = () => {
    renderModalWindow('paste_content_here');
}

const renderModalWindow = (content) => {
    let modal = new Modal ('friends_modal');
    modal.buildModal(content)
}











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
