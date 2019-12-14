import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import * as fromApp from '../../store/app.reducers';
import * as WishListActions from '../wish-list/store/wish-list.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onAddToWishList(): void {
    this.store.dispatch(new WishListActions.AddWish(this.data));
    this.dialogRef.close();
    this.toastr.success('Item added successfully :)');
  }

  closeMoreDetails(): void {
    this.dialogRef.close();
  }

}