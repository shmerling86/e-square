import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import * as fromApp from '../../store/app.reducers';
import * as WishListActions from '../wish-list/store/wish-list.actions';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {

  wishList: object[];
  wishListSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wishListSub = this.store.select('wishList').subscribe(
      res => { this.wishList = res.wishList });
  }

  removeFromWishList(i): void {
    this.store.dispatch(new WishListActions.RemoveWish(i));
    this.toastr.success('Item removed successfully :)');
  }

  ngOnDestroy(): void {
    if (this.wishListSub) this.wishListSub.unsubscribe();
  }

}
