import { ChatComponent } from './../chat/chat.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  addChat() {
    this.sharedService.sendClickEvent();
  }
}
