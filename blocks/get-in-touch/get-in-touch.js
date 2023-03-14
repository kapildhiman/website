const hubspotUrl = document.querySelector('.get-in-touch-wrapper > div > div > div:first-of-type [href*="https://info.moleculardevices.com"]');
const hubspotIframeWrapper = document.createElement('div');
const hubspotIframe = document.createElement('iframe');
hubspotIframeWrapper.className = 'hubspot-iframe-wrapper';
hubspotIframe.src = hubspotUrl.href;
hubspotIframe.setAttribute('loading', 'lazy');
hubspotIframeWrapper.appendChild(hubspotIframe);
hubspotUrl.parentNode.replaceChild(hubspotIframeWrapper, hubspotUrl);

const mapUrl = document.querySelector('.get-in-touch-wrapper > div > div > div:last-of-type [href*="https://maps.google.com"]');
const mapIframe = document.createElement('iframe');
mapIframe.src = mapUrl.href;
mapIframe.setAttribute('loading', 'lazy');
mapUrl.parentNode.replaceChild(mapIframe, mapUrl);


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        //entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
    })
})

document.querySelectorAll('.get-in-touch-wrapper > iframe');