/* ================ TAB HANDLER ===================== */
const regionalTabs = document.querySelectorAll(".regional-contacts-wrapper .regional-contacts > div > div:first-child");
const tabContentItems = document.querySelectorAll(".regional-contacts-wrapper .regional-contacts > div");
const parent = document.querySelector(".regional-contacts-wrapper");
const nextChild = document.querySelector(".regional-contacts-wrapper .regional-contacts");

/* create tab wrapper */
const tabWrapper = document.createElement('div');
tabWrapper.classList.add('tab-wrapper');
parent.insertBefore(tabWrapper, nextChild);


const countryNames = [];
regionalTabs.forEach(function (tab, index) {
    const country = tab.textContent;
    
    if (!countryNames.includes(country)) {

        /* create tab buttons */
        const tabClassName = 'tab-btn';
        countryNames.push(country);

        tab.parentElement.id = country.toLowerCase();

        /* hide tab contents */
        tab.parentElement.classList.add("tab-content");
        tab.parentElement.style.display = "none";
        
        createTabButtons(tabWrapper, country, tabClassName, index);
    } else {
        /* remove duplicate country data */
        const duplicateData = tab.parentElement;
        const grandParents = tab.parentElement.parentElement;
        const clearFloat = document.createElement('div');
        clearFloat.style.clear = 'both';
        clearFloat.style.float = 'none';
        
        for (let i = 0; i < grandParents.children.length; i++) {
            
            if (grandParents.children[i].id === country.toLowerCase()) {
                grandParents.children[i].appendChild(clearFloat);
                grandParents.children[i].appendChild(duplicateData);
                duplicateData.classList.add('more-data');
            }
        }
    }
})

/* create tab buttons */
// regionalTabs.forEach(function (tab, index) {
//     const tabName = tab.textContent;
//     const tabClassName = 'tab-btn';

//     tab.parentElement.id = tabName.toLowerCase();
//     createTabButtons(tabWrapper, tabName, tabClassName, index);
// })

function createTabButtons(tabWrapper, tabName, tabClassName, index) {
    const tabBtn = document.createElement('a');

    tabBtn.textContent = tabName;
    tabBtn.href = "#" + tabName.toLowerCase();
    tabBtn.classList.add(tabClassName);

    if (index === 0) {
        tabBtn.classList.add('active');
        document.getElementById(tabName.toLowerCase()).style.display = 'block';
    }

    tabBtn.addEventListener('click', tabHandler);
    tabWrapper.appendChild(tabBtn);
}

function tabHandler(event) {
    event.preventDefault();

    const tabID = this.href.split("#")[1];
    const tabContents = document.querySelectorAll('.tab-content');
    const tabCount = this.parentElement.children.length;
    // console.log(this.parentElement.nextElementSibling.children);

    for (let i = 0; i < tabCount; i++) {
        this.parentElement.children[i].classList.remove('active');
        if (tabContents[i].id === tabID) {
            tabContents[i].style.display = 'block';
        } else {
            tabContents[i].style.display = 'none';
        }
    }

    this.classList.add('active');
}
/* ================ TAB HANDLER ===================== */