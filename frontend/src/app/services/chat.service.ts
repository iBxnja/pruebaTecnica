import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: WebSocket | null = null;
  private messagesSubject: Subject<string> = new Subject<string>();
  public messages$ = this.messagesSubject.asObservable();

  constructor() { }

  connectToWebSocket(roomName: string) {
    this.socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`);

    this.socket.onopen = () => {
      console.log('Conectado al WebSocket');
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data).message;
      this.messagesSubject.next(message);
    };

    this.socket.onclose = () => {
      console.log('Conexión cerrada');
    };
  }

  sendMessage(message: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ message }));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
