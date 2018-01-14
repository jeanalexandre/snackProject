import { TestBed, inject } from '@angular/core/testing';

import { UtilisateurService } from './utilisateur.service';

describe('UtilisateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateurService]
    });
  });

  it('should be created', inject([UtilisateurService], (service: UtilisateurService) => {
    expect(service).toBeTruthy();
  }));
});
