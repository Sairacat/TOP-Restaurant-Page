import catgifs from './pic/cat.gif'

const moduleArea = document.querySelector('.module');

const homeTitle = document.createElement('div');
homeTitle.classList.add('home-title');
homeTitle.textContent = 'What is Little Witch Cafe?';

const homeContent = document.createElement('div');
homeContent.classList.add('home-content');
homeContent.textContent = "Escape the ordinary and find your way to Little Witch Cafe, a hidden sanctuary nestled in the misty outskirts of the city. We've breathed new life into a forgotten, centuries-old Victorian mansion, transforming its dusty library and overgrown gardens into a cozy haven for daydreamers and coffee lovers alike.\n\nYour magical escape is just a short drive away. Come in, find a corner, and let us pour you a little cup of wonder."


const hourTitle = document.createElement('div');
hourTitle.classList.add('home-title', 'hour');
hourTitle.textContent = 'Hours';

const timeTable = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekend']
const hourList = document.createElement('ul');
hourList.classList.add('hourlist');

for(let i = 0; i < timeTable.length; i++) {
    const listItem = document.createElement('li');
    if(i === 1 || i === 4) {
        listItem.textContent = `${timeTable[i]}: 9am to 9pm`;
    }else if(i === 5) {
        listItem.textContent = `${timeTable[i]}: Rest`;
    }else {
        listItem.textContent = `${timeTable[i]}: 9am to 5pm`;
    }
    hourList.appendChild(listItem);
}

const locationTitle = document.createElement('div');
locationTitle.textContent = 'Location';
locationTitle.classList.add('home-title', 'location');

const locationContent = document.createElement('div');
locationContent.textContent = '123 Witch Street Witchville';
locationContent.classList.add('location-content');

const gifsWrapper = document.createElement('div');
gifsWrapper.classList.add('gifswrapper');

for(let i = 0; i < 5; i++) {
    const gif = document.createElement('img');
    gif.src = catgifs;
    gifsWrapper.appendChild(gif); 
}

function generateHomePage() {
    if(moduleArea.classList.contains('home-module-grid')) {
        return;
    }else {
        moduleArea.className = 'module';
        moduleArea.classList.add('home-module-grid');
        moduleArea.replaceChildren();
    }

    moduleArea.appendChild(homeTitle);
    moduleArea.appendChild(homeContent);
    moduleArea.appendChild(hourTitle);
    moduleArea.appendChild(hourList);
    moduleArea.appendChild(locationTitle);
    moduleArea.appendChild(locationContent);
    moduleArea.appendChild(gifsWrapper);
}

export {generateHomePage};
