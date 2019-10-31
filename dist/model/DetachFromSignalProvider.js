import { SignalDetachMode } from './SignalDetachMode';
export class DetachFromSignalProvider {
    constructor(data) {
        this['mode'] = data['mode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DetachFromSignalProvider({
                'mode': SignalDetachMode.constructFromObject(data['mode']),
            });
        }
    }
}
