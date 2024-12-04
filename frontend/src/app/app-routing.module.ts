import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room/chat-room.component';


const routes: Routes = [
  { path: 'chat/:room_name', component: ChatRoomComponent },
  { path: '', redirectTo: '/chat/general', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
