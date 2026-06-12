

const moduleArea = document.querySelector('.module');

class person {
    constructor(position, name, number, email) {
        this.position = position;
        this.name = name;
        this.number = number;
        this.email = email;
    }
}

const contactTitle = document.createElement('div');
contactTitle.textContent = 'Contact Us!';
contactTitle.classList.add('contact-title');

const contactArray = [];
const contact1 = new person('Witch Chef', 'Allie Witchcroft', '557-682-3519', 'alliew@witchcafe.com');
const contact2 = new person('Witch Waitress', 'Hady Witchcroft', '558-321-473', 'hadyw@witchcafe.com');
const contact3 = new person('Witch Manager', 'Elsa Witchcroft', '559-421-648', 'elsaw@witchcafe.com');
contactArray.push(contact1, contact2, contact3);

const contactCardArray = contactArray.map(contact => {
    const card = document.createElement('div');
    card.classList.add('contact-card');

    const info = document.createElement('div');
    info.classList.add('info');

    const position = document.createElement('div');
    position.classList.add('position');
    position.textContent = contact.position;

    const name = document.createElement('div');
    name.textContent = contact.name;

    const number = document.createElement('div');
    number.textContent = `Phoner Number: ${contact.number}`;

    const email = document.createElement('div');
    email.textContent = `E-mail: ${contact.email}`;

    info.append(name, number, email);
    card.append(position, info);

    return card
})

function generateContact() {
    if(moduleArea.classList.contains('contact-module-grid')) {
        return;
    }else {
        moduleArea.className = 'module';
        moduleArea.classList.add('contact-module-grid');
        moduleArea.replaceChildren();
    }

    moduleArea.appendChild(contactTitle);
    for(let contact of contactCardArray) {
        moduleArea.appendChild(contact);
    }
}

export {generateContact};

