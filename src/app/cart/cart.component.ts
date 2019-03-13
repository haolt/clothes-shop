import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(
		public routerService : Router
	) { }

	ngOnInit() {
	}

	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onGoToCheckout() {
		this.routerService.navigateByUrl('checkout');
	}
}

