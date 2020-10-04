import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { GuardComponent } from './guard-clauses.component';

describe('GuardComponent', () => {
  let spectator: Spectator<GuardComponent>;
  const createComponent = createComponentFactory(GuardComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
