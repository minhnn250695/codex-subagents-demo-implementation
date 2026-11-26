import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.css',
})
export class MultiSelect {
  readonly label = input.required<string>();
  readonly popoverId = input.required<string>();
  readonly options = input.required<readonly string[]>();
  readonly selected = model.required<readonly string[]>();

  protected toggle(option: string, checked: boolean): void {
    this.selected.update((values) =>
      checked ? [...values, option] : values.filter((value) => value !== option),
    );
  }
}
