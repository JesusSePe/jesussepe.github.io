// @ts-check

/**
 * Function to get the HTML string to insert new buttons
 * @param {string} name 
 * @param {number} soundID 
 */
function getButtonHTML(name, soundID) {
    return `<button class="soundboard-btn text-dark" data-soundid="${soundID}">${name}</button>`;
}

/**
 * 
 * Local storage format:
 * sounds: [
 *   soundID: {
 *      sound: base64 encoded sound
 *   }
 * ]
 */

/**
 * Retrieve from local storage the content for the provided item
 * @param {string} item 
 */
function getLocalStorageKeyContent(item) {
    let retrievedItem = localStorage.getItem(item);
    if (!retrievedItem) {
        return null;
    }

    return item;
}

/**
 * Retrieve from local storage the provided sound
 * @param {string} soundID 
 */
function getSoundFromLocalStorage(soundID) {
    let sounds = getLocalStorageKeyContent('sounds');

    if (!sounds) {
        return null;
    }

    let decodedSounds = JSON.parse(sounds);

    let soundItem = decodedSounds[soundID];
    if (!soundItem) {
        return null;
    }
    
    return soundItem.sound;
}

