import { UserVerificationStatus } from './UserVerificationStatus';

export interface ProfileFullViewModel {
    id: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    phone: string;
    phoneNumberConfirmed: boolean;
    birthday: Date;
    gender: boolean;
    avatar: string;
    about: string;
    userName: string;
    index: string;
    citizenship: string;
    refUrl: string;
    verificationStatus: UserVerificationStatus;
    isPublicInvestor: boolean;
}

