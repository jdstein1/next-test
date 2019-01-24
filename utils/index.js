// utils/index.js

const Utils = {

    checkWindow() {
        if (typeof window === 'undefined') {
            global.window = {}
        }
    },

    getRandMember(arr) {
		return arr[ ( Math.floor( Math.random() * arr.length ) ) ];
    }

}

export default Utils;