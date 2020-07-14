import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private dados = {
    post: new Post("", "", "", "", "",""),
    arquivo: null
  };

  constructor(
      public dialogref: MatDialogRef<PostDialogComponent>) { }

  ngOnInit(): void {
  }

}
