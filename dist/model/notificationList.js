import { NotificationViewModel } from './notificationViewModel';
import ApiClient from "../ApiClient";
export class NotificationList {
    constructor() {
    }
    static constructFromObject(data, obj = new NotificationList()) {
        if (data) {
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [NotificationViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}