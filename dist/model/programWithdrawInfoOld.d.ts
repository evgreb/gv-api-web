export declare class ProgramWithdrawInfoOld {
    'periodEnds'?: Date;
    'title'?: string;
    'availableToWithdraw'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramWithdrawInfoOld): ProgramWithdrawInfoOld;
}