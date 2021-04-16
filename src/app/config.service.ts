import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getSettings(database: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
