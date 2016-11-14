"use strict";
const utils_1 = require('@test/utils');
function getPlayer() {
    return {
        play: function () {
            const states = utils_1.safeParse('{ playing: "playing"}');
            console.log(states.playing);
        }
    };
}
exports.getPlayer = getPlayer;
//# sourceMappingURL=index.js.map