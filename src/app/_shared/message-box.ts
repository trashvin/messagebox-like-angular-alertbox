import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { SimpleDialogComponent } from "../simple-dialog/simple-dialog.component";

export class MessageBox {
    static show(dialog: MatDialog, message, title ="Prompt", 
                information="", button = 0,allow_outside_click=false, 
                style = 0, width = "350px") {
        let response = "";
        console.log("Show...");
        const dialogRef = dialog.open( SimpleDialogComponent, {
            data: {
              title: title,
              message: message,
              information: information,
              button:button,
              style: style,
              allow_outside_click: allow_outside_click
            },
            width: width
          });
      
          return dialogRef.afterClosed();
          
    }

    



}

export  enum MessageBoxButton {
    Ok = 0,
    OkCancel = 1,
    YesNo = 2,
    AcceptReject = 3
};

export  enum MessageBoxStyle {
    Simple = 0,
    Full = 1
};
