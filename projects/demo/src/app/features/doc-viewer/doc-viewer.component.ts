import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DocViewerService } from './doc-viewer.service';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocViewerComponent implements OnInit {
  @Input() component: string;

  markdown$: Observable<string>;

  constructor(private readonly _docViewerService: DocViewerService) { }

  ngOnInit() {
    this.markdown$ = this._docViewerService.get(this.component);
  }
}
