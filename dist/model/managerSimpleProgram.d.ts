export declare class ManagerSimpleProgram {
    'level'?: number;
    'levelProgress'?: number;
    'id'?: string;
    'title'?: string;
    'color'?: string;
    'logo'?: string;
    'url'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerSimpleProgram): ManagerSimpleProgram;
}