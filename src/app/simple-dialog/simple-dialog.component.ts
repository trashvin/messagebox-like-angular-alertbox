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
  information: string;
  button: number;
  allow_outside_click: boolean;
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
    this.style = data.style || 1;
    this.title = data.title;
    this.message = data.message;
    this.information = data.information;
    this.button = data.button;
    this.dialogRef.disableClose = !data.allow_outside_click || false;
    
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
