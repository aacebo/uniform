import { Component, ChangeDetectionStrategy, ElementRef, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-marked',
  exportAs: 'uniMarked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss'],
  host: { class: 'uni-marked' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniMarkedComponent implements OnInit {
  constructor(private readonly _el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    console.log(this._el.nativeElement.textContent);
  }
}
