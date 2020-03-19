import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { INPUT_EXAMPLE } from './input-example.constant';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  readonly example = INPUT_EXAMPLE;

  form: FormGroup;
  value?: string;
  disabled?: boolean;

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      username: this._fb.control(''),
      password: this._fb.control(''),
      bio: this._fb.control(''),
    });
  }
}
