import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { GuardService } from './guard-clauses.service';

describe('GuardService', () => {
  let spectator: SpectatorService<GuardService>;
  const createService = createServiceFactory(GuardService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
