import { INestApplication } from '@nestjs/common';
interface Services {
    urls: {
        name: string;
        url: string;
        swaggerVersion: string;
        location: string;
    }[];
}
export declare function knife4jSetup(app: INestApplication, services: Services): void;
export {};
