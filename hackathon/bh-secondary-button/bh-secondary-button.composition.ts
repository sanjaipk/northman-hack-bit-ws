import { Component, NgModule } from '@angular/core';
import { BhSecondaryButtonModule } from './bh-secondary-button.module';

@Component({
  selector: 'bh-secondary-button-composition-cmp',
  template: `BhSecondaryButton composition: <bh-secondary-button></bh-secondary-button>`
})
class BhSecondaryButtonCompositionComponent {}

@NgModule({
  declarations: [BhSecondaryButtonCompositionComponent],
  imports: [BhSecondaryButtonModule],
  bootstrap: [BhSecondaryButtonCompositionComponent]
})
export class BhSecondaryButtonCompositionModule {}
