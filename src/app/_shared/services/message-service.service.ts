import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private message: MatSnackBar) { }

  async sendMessage() {
   await setTimeout(() => {
      this.message.open("Candidate added");
    }, 3000);
    this.message.dismiss();
  }
}
