import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  private post: Post[] = [
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
    new Post("João", "Meu Post", "Subtítulo", "joao@gmail.com", "Minha mensagem"),
  ];
}
