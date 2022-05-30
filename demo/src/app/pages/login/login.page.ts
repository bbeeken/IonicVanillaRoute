/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '././../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {
  AvailableResult,
  BiometryType,
  NativeBiometric,
} from 'capacitor-native-biometric';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';


  error_msg = {
    'email': [
      {
        type: 'required',
        message: 'Provide email.'
      },
      {
        type: 'pattern',
        message: 'Email is not valid.'
      }
    ],
    'password': [
      {
        type: 'required',
        message: 'Password is required.'
      },
      {
        type: 'minlength',
        message: 'Password length should be 6 characters long.'
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });


  }

  signIn(value) {
       //     // this.login(credentials.username, credentials.password)
    this.ionicAuthService.signinUser(value)
      .then((response) => {
      //  console.log(response);
        this.setCredential(value);


        this.errorMsg = "";
        this.router.navigateByUrl('dashboard');
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      });
  }

  goToSignup() {
    this.router.navigateByUrl('register');
  }
  setCredential(value) {
    // Save user's credentials
    console.log(value);
    NativeBiometric.setCredentials({
      username: value.email,
      password: value.password,
      server: 'com.ccfsdemo.app',
    }).then();
  }
  deleteCredential() {
    // Delete user's credentials
    NativeBiometric.deleteCredentials({
      server: 'com.ccfsdemo.app',
    });
  }

  checkCredential() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
 //     console.log(result);
      const isAvailable = result.isAvailable;
  //    alert('RESULT ' + JSON.stringify(result));
   //   const isFaceId=result.biometryType==BiometryType.FACE_ID;
 //  alert('RESULT ' + JSON.stringify(result));
      if (isAvailable) {
      //  alert('Face ID is available');
      //  alert('RESULT ' + JSON.stringify(result));
        // Get user's credentials
        NativeBiometric.getCredentials({
          server: 'com.ccfsdemo.app',
        }).then((credentials) => {
       //   alert('RESULT ' + JSON.stringify(credentials));
     //     alert('CREDENTIAL ' + JSON.stringify(credentials));
          // Authenticate using biometrics before logging the user in
          NativeBiometric.verifyIdentity({
            reason: 'Access Your Account',
            title: 'Log in',
            subtitle: 'CCFS Demo',
            description: 'Log in to see the calendar and stuffS',
          })
            .then(() => {
              //     // Authentication successful
          //    alert('SUCCESS!!');
         const StoredCredentials = {
          "email": credentials.username,
          "password": credentials.password
      }



          this.signIn(StoredCredentials)
              //     // this.login(credentials.username, credentials.password);
            })
            .catch((err) => {
              //   // Failed to authenticate
              alert('FAIL!');
            });
        });
      }
    });
  }



}
