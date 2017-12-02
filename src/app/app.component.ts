import { Component } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { SimpleDialogComponent } from "./simple-dialog/simple-dialog.component";
import { MessageBox, MessageBoxButton, MessageBoxStyle } from "./_shared/message-box";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  message;
  information;
  button;
  style;
  allow_outside_click;
  buttons = [
    {value: 0, display: "Ok"},
    {value: 1, display: "Ok/Cancel"},
    {value: 2, display: "Yes/No"},
    {value: 3, display: "Accept/Cancel"},
  ];
  result;
  constructor(
    private dialog: MatDialog
  ) {

  }
  onShowClick() {
    MessageBox.show(this.dialog, this.message,this.title,this.information,this.button,this.allow_outside_click,this.style).subscribe( result => {
      this.result = (result === undefined) ? "none" : result.result;
    });
  }
}
