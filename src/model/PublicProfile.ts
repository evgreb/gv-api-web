import { SocialLinkViewModel } from './SocialLinkViewModel';

export interface PublicProfile {
    id: string;
    username: string;
    about: string;
    avatar: string;
    regDate: Date;
    assets: Array<string>;
    url: string;
    socialLinks: Array<SocialLinkViewModel>;
}

