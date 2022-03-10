import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chatForm = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  get userChat() {
    return this.chatForm.get('userChat');
  }

  get anotherChats() {
    return this.chatForm.get('anotherChats') as FormArray;
  }

  addAnoterChat() {
    this.anotherChats.push(
      this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ])
    );
  }

  ngOnInit() {
    this.chatForm = this.fb.group({
      userChat: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200),
        ],
      ],
      anotherChats: this.fb.array([]),
    });
  }

  onSubmit() {
    console.log(this.chatForm.value);

    this.chatForm.reset();
  }
}
