import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  chatForm = this.fb.group({
    userChat: [''],
  });

  ngOnInit(): void {}
}
