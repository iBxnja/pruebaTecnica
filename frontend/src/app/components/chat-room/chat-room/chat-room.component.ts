import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  standalone: false,
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  roomName: string = "";
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomName = params.get('room_name')!;
      this.chatService.connectToWebSocket(this.roomName);
    });

    this.chatService.messages$.subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

  ngOnDestroy(): void {
    this.chatService.disconnect();
  }
}
