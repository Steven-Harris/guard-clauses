import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { GuardComponent } from './guard.component';

describe('GuardComponent', () => {
  let spectator: Spectator<GuardComponent>;
  const createComponent = createComponentFactory(GuardComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
