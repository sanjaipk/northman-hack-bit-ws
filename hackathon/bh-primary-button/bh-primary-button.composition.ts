import { Component, NgModule } from '@angular/core';
import { BhPrimaryButtonModule } from './bh-primary-button.module';

@Component({
  selector: 'bh-primary-button-composition-cmp',
  template: `BhPrimaryButton composition: <bh-primary-button></bh-primary-button>`
})
class BhPrimaryButtonCompositionComponent {}

@NgModule({
  declarations: [BhPrimaryButtonCompositionComponent],
  imports: [BhPrimaryButtonModule],
  bootstrap: [BhPrimaryButtonCompositionComponent]
})
export class BhPrimaryButtonCompositionModule {}
