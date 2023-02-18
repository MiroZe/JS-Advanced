function toggle() {
    let moreElements = document.getElementsByClassName('button')[0];
    
    let extraElement = document.getElementById('extra');
    if(moreElements.textContent === 'More') {
        extraElement.style.display = 'block';
        moreElements.textContent = 'Less'

    } else if (moreElements.textContent === 'Less') {
        extraElement.style.display = 'none';
        moreElements.textContent = 'More'
    }
    
    
}