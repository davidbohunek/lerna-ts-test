import { Player } from '@test/types';

export function safeParse<T>(value: string): T {
    try {
        return JSON.parse(value);
    } catch (error) {
        return null;
    }
}

export function getPlayer(onPlaying: Function): Player {
    return {
        play: function() {
            onPlaying();
        }
    }
}

