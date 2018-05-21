import { Component, OnInit, ViewChild } from '@angular/core';
/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts" />

@Component({
  selector: 'app-gamescreen',
  templateUrl: './gamescreen.component.html',
  styleUrls: ['./gamescreen.component.css']
})
export class GamescreenComponent implements OnInit {

  game : Phaser.Game;

  constructor() { }

  @ViewChild('editor') editor;
  @ViewChild('gameCanvas') gameCanvas;

  text: string = "";

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editor.getEditor().setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
        name: "showOtherCompletions",
        bindKey: "Ctrl-.",
        exec: function (editor) {

        }
    })

    this.editor.getEditor().session.setMode("ace/mode/javascript");

    //this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });


  }

}



