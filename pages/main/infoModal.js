//setting modal info

import { Modal } from '.script';

export class InfoModal extends Modal {
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