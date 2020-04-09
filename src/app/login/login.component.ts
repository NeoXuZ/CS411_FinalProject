import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from '@msi/cobalt';

const buttonSettings = {
  text: 'Test Button',
routerLink: 'events'
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addButton = true;
  closeButton = true;
  autoDismissed = true;
  autoDismissAfter: 100;
  success = 'Login Successfully';


  loginUserData = {};
  constructor(private _auth: AuthService, private _router: Router, private toastService: ToastService) { }
  addSuccessToast() {
    this.toastService.success(this.success, this.addButton ? buttonSettings : undefined, {
      autoDismiss: (this.autoDismissed && this.autoDismissAfter) || this.autoDismissed,
      closeButton: this.closeButton,
    });
  }

  ngOnInit() {
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {console.log(res);
              localStorage.setItem('token', res.token);
              this._router.navigate(['dashboard']);
      },
      err => console.log(err)
    );
  }
}
