import { Component } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { SimpleDialogComponent } from "./simple-dialog/simple-dialog.component";
import { DialogConfiguration } from "./dialog-configuration";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config = new DialogConfiguration();
  buttons = [
    {value: 0, display: "Ok"},
    {value: 1, display: "Ok/Cancel"},
    {value: 2, display: "Yes/No"},
    {value: 3, display: "Accept/Cancel"},
  ];
  types = [
    {value: 0, display: "None"},
    {value: 0, display: "Information"},
    {value: 0, display: "Question"},
    {value: 0, display: "Warning"},
    {value: 0, display: "Alert"},
    {value: 0, display: "Error"},
  ];
  
  constructor(
    private dialog: MatDialog
  ) {

  }
  onShowClick() {
    console.log(this.config);
    const dialogRef = this.dialog.open( SimpleDialogComponent, {
      data: {
        configuration: this.config
      },
      width: "300px"
    });
  }
}
