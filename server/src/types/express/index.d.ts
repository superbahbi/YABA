import 'express-session';

declare module 'express-session' {
    export interface SessionData {
        access_token: string;
    }
}