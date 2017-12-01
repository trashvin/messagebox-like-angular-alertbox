import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from "@angular/material/dialog";


@Component({
  selector: "app-simple-dialog",
  templateUrl: "./simple-dialog.component.html",
  styleUrls: ["./simple-dialog.component.css"]
})
export class SimpleDialogComponent {
  style: number;
  title: string;
  message: string;
  additional_message: string;
  button: number;
  type: number;
  show_icon: boolean;
  allow_click_outside_to_close: boolean;
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
    this.style = data.configuration.style || 1;
    this.title = data.configuration.title;
    this.message = data.configuration.message;
    this.additional_message = data.configuration.additional_message;
    this.button = data.configuration.button;
    this.type = data.configuration.type;
    this.show_icon = data.configuration.show_icon || false;
    this.dialogRef.disableClose = !data.configuration.allow_click_outside_to_close || false;
    
  }
  onOk() {
    this.dialogRef.close({result: "ok"});
  }
  onCancel() {
    this.dialogRef.close({result: "cancel"});
  }
  onYes() {
    this.dialogRef.close({result: "yes"});
  }
  onNo() {
    this.dialogRef.close({result: "no"});
  }
  onAccept() {
    this.dialogRef.close({result: "accept"});
  }
  onReject() {
    this.dialogRef.close({result: "reject"});
  }


}
