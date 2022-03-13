import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormArrayName,
} from '@angular/forms';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chatForm = new FormGroup({});
  clickEventSuscription: Subscription = new Subscription();
  private maxChats = 0;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.clickEventSuscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.addAnoterChat();
      });
  }

  get sendetChats() {
    return this.chatForm.get('sendetChats') as FormArray;
  }

  get anotherChats() {
    return this.chatForm.get('anotherChats') as FormArray;
  }

  clickMe() {
    this.sharedService.sendClickEvent();
  }

  addAnoterChat() {
    if (this.maxChats < 9) {
      this.anotherChats.push(
        this.fb.control('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200),
        ])
      );
      this.maxChats += 1;
    }
  }

  ngOnInit() {
    this.chatForm = this.fb.group({
      anotherChats: this.fb.array([]),
      sendetChats: this.fb.array([]),
    });
  }

  onSubmit() {
    console.log(this.chatForm.value);
  }
}
