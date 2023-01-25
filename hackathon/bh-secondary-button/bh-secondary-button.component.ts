import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bh-secondary-button',
  template: `
    <button mat-button class="btn-orange btn-large blue-back" (click)="ctaClickedfn">
          <strong class="btn-orange-label btn-large-label">
            {{ buttonLabel }}
          </strong>
        </button>
`,
  styleUrls: ['./bh-secondary-button.component.scss']
})
export class BhSecondaryButtonComponent {
  @Input() buttonLabel: string | undefined;
  @Output() ctaClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ctaClickedfn(){
    this.ctaClicked.emit();
  }

}
