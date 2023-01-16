import { INestApplication } from '@nestjs/common';
interface Service {
    name: string;
    url: string;
    swaggerVersion: string;
    location: string;
}
export declare function knife4jSetup(app: INestApplication | any, services: Service[]): void;
export {};
