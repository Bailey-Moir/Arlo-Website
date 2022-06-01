import { Directive, OnDestroy } from '@angular/core';

// Rxjs
import { Subject } from 'rxjs';

/**
 * This is a class that should be used to extend every component class.
 * This class will cleanup any observables when the component is destoryed.
 * This is to prevent memory leaks.
 * 
 * It will also implement any methods that should be used on most/all components
 */
//Angular 10 https://v10.angular.io/guide/migration-undecorated-classes
@Directive()
export class ComponentBase implements OnDestroy {
	ngUnsubscribe$ = new Subject();

    constructor() { }

	ngOnDestroy() {
		this.unsubscribe();
	}

	unsubscribe() {
		this.ngUnsubscribe$.next(null);
		this.ngUnsubscribe$.unsubscribe();
	}

	formatBooleanToUserFriendly(state: boolean): string {
		return state ? 'Yes' : 'No';
	}
}
