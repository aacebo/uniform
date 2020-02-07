import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class DocViewerService {
  constructor(private readonly _http: HttpClient) { }

  get(component: string) {
    return this._http.get<string>(
      `${ environment.github.raw }/${ component }/${ component }.md`,
      { responseType: 'text' as 'json' },
    );
  }
}
