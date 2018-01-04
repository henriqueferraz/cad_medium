import { Component } from "@angular/core";
import { FirebaseAuthState } from "angularfire2";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";

import { User } from "../models/user.model";

import { AuthService } from "../providers/auth.service";
import { UserService } from "../providers/user.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginPage;
  currentUser: User;

  constructor(
    authService: AuthService,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userService: UserService
  ) {
    authService.auth.subscribe((authState: FirebaseAuthState) => {
      if (authState) {
        userService.currentUser.subscribe((user: User) => {
          this.currentUser = user;
        });
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
