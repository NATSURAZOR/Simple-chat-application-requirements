import { TestBed } from '@angular/core/testing';

import { AddChatService } from './add-chat.service';

describe('AddChatService', () => {
  let service: AddChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
