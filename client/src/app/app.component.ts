import { AfterContentInit, Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BackendService } from '../services/backend.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  constructor (
      protected http: HttpClient,
      protected snackBar: MatSnackBar,
      protected backendService: BackendService,
      protected cookieService: CookieService
  ) {}

  title = 'Aitarget test case';

  cookieKey = 'facebook_ad_limit';

  loading = false;

  limit = 0;

  sources = {
    logo: '/assets/aitarget_logo.png',

    facebook_icon: '/assets/facebook_icon.svg'
  };

  limitFormControl = new FormControl('', [
      Validators.required,
      Validators.min(0)
  ]);

  matcher: ErrorStateMatcher = new MyErrorStateMatcher();

  reportError (e: HttpErrorResponse) {
    console.error(e);
    const config = <any>{horizontalPosition: 'right', verticalPosition: 'top', panelClass: 'snack-error'};
    this.snackBar.open((e.error || {error: e.message}).error, 'close', config);
  }

  hasLimitInCookies () {
    return this.cookieService.check(this.cookieKey);
  }

  getLimitFromCookies () {
    return Number(this.cookieService.get(this.cookieKey));
  }

  setLimitToCookies (limit) {
    this.cookieService.set(this.cookieKey, limit, 1);
  }

  async ngAfterContentInit () {
    try {
      this.loading = true;
      if (this.hasLimitInCookies()) {
        this.limit = this.getLimitFromCookies();
      } else {
        this.limit = await this.backendService.getLimit();
        this.setLimitToCookies(this.limit);
      }
      setTimeout(() => this.limitFormControl.setValue(this.limit), 0);
    } catch (e) {
      this.reportError(e);
    } finally {
      this.loading = false;
    }
  }

  async onSubmit () {
    try {
      this.loading = true;
      this.limit = await this.backendService.postLimit(this.limitFormControl.value);
      this.limitFormControl.setValue(this.limit);
      this.setLimitToCookies(this.limit);
    } catch (e) {
      this.reportError(e);
    } finally {
      this.loading = false;
    }
  }
}
