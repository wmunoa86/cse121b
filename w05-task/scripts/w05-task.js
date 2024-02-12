/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement('article');
    
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    
    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;
    
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const templeData = await response.json();
    templeList.push(...templeData);
    
    // Call displayTemples function after fetching data
    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = ''; // Clear all child elements
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset(); // Clear the displayed list of temples

  const filter = document.getElementById('filtered').value;
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter((temple) => new Date(temple.dedicated).getFullYear() <= 1950));
      break;
    case 'all':
    default:
      displayTemples(temples);
  }
};

/* Event Listener */
const filteredElement = document.getElementById('filtered');
filteredElement.addEventListener('change', () => {
  filterTemples(templeList);
});

getTemples();