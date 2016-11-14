"use strict";
function safeParse(value) {
    try {
        return JSON.parse(value);
    }
    catch (error) {
        return null;
    }
}
exports.safeParse = safeParse;
function getPlayer(onPlaying) {
    return {
        play: function () {
            onPlaying();
        }
    };
}
exports.getPlayer = getPlayer;
//# sourceMappingURL=index.js.map