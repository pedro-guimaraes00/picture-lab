import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myapp';
  public post: Post[] = [
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("Paulo", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("André", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("David", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("Pedro", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("Tiago", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("Josué", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("Augusto", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if(result) {
          console.log(result);
        }
      }
    );
  }
}
