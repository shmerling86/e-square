import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as WishListActions from '../wish-list/store/wish-list.actions';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<fromApp.AppState>,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private toastr: ToastrService) { }

  isFavorite: boolean = false;
  favoriteCheckSub: Subscription;

  ngOnInit() {
  }

  onAddToWishList(): void {
    this.store.dispatch(new WishListActions.AddWish(this.data));
    this.dialogRef.close();
    this.toastr.success('Item added successfully :)');
  }

  isAlreadyFavorite(id): boolean {
    this.isFavorite = false;
    this.favoriteCheckSub = this.store.select('wishList').subscribe(
      res => res.wishList.forEach(element => {
        if (element['id'] === id) this.isFavorite = true;
      })
    )
    return this.isFavorite
  }

  closeMoreDetails(): void {
    this.dialogRef.close();
  }

  goToWishList(): void {
    this.router.navigateByUrl('/wishList');
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.favoriteCheckSub) this.favoriteCheckSub.unsubscribe();
  }

}