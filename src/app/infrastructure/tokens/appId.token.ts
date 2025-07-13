import { InjectionToken } from "@angular/core";

export const API_KEY = new InjectionToken<string>('ApiKeyToken',{
    providedIn:'root',
    factory: () => 'fe3695759da76e0c9dcaf566634a08ed'
});