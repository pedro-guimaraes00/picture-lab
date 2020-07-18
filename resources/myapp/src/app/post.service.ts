import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

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

  constructor(private http: HttpClient) { }
}
