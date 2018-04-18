// utils.js

const Utils = {

    checkWindow() {
        if (typeof window === 'undefined') {
            global.window = {}
        }
    }

}

export default Utils;