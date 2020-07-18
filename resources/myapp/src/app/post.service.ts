import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public post: Post[] = [];

  constructor(private http: HttpClient) { 
    this.http.get('/api').subscribe(
      (post: any[]) => {
        for(let p of post) {
          this.post.push(
            new Post(p.nome, p.titulo, p.subtitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes)
          )
        }
      }
    );
  }

  save(post: Post, file: File) {
    const uploadData = new FormData();
    uploadData.append('nome', post.nome);
    uploadData.append('titulo', post.titulo);
    uploadData.append('subtitulo', post.subtitulo);
    uploadData.append('email', post.email);
    uploadData.append('mensagem', post.mensagem);
    uploadData.append('arquivo', file, file.name);

    this.http.post('/api', uploadData, { reportProgress: true, observe: 'events'})
      .subscribe((event: any) => {
          if(event.type == HttpEventType.Response) {
            console.log(event);
          }
    })
  }

}
