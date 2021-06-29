import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({

    templateUrl: 'dialogdelete.component.html'

})

export class DialogDeleteComponent {

    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) 
    {
        

    }



}


