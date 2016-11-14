import { safeParse } from '@test/utils';
import { Player } from '@test/types'

interface States {
    playing: string
}

export function getPlayer(): Player {
    return {
        play: function() {
            const states = safeParse<States>('{ playing: "playing"}');
            console.log(states.playing); 
        }
    }
}