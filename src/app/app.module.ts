import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// Páginas
import { CadAgendaPage } from "../pages/cad-agenda/cad-agenda";
import { CadBibliotecaPage } from "../pages/cad-biblioteca/cad-biblioteca";
import { EventoPage } from "./../pages/evento/evento";
import { HomePage } from "../pages/home/home";
import { LisUsuariosPage } from "../pages/lis-usuarios/lis-usuarios";
import { LoginPage } from "../pages/login/login";
import { MyApp } from "./app.component";
import { SignupPage } from "../pages/signup/signup";
import { UserProfilePage } from "../pages/user-profile/user-profile";

// Firebase
import { AuthMethods, AuthProviders } from "angularfire2/auth";
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";

//Serviço
import { AgendaService } from "../providers/agenda.service";
import { AuthService } from "../providers/auth.service";
import { BibliotecaService } from "../providers/biblioteca.service";
import { UserService } from "../providers/user.service";

// Components
import { CustomHeaderComponent } from "../components/custom-header/custom-header";
import { CapitalizePipe } from "../pipes/capitalize/capitalize.pipe";
import { UserAdminComponent } from "../components/user-admin/user-admin";
import { UserInfoComponent } from "../components/user-info/user-info";
import { UserMenuComponent } from "../components/user-menu/user-menu";
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { LisBibliotecaPage } from "../pages/lis-biblioteca/lis-biblioteca";

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDtmsT9jwCJ6Sv13_5-vb9r13A5VhANx1E",
  authDomain: "cad-mediuns.firebaseapp.com",
  databaseURL: "https://cad-mediuns.firebaseio.com",
  storageBucket: "cad-mediuns.appspot.com",
  messagingSenderId: "517157128223"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    CadAgendaPage,
    CadBibliotecaPage,
    CapitalizePipe,
    CustomHeaderComponent,
    EventoPage,
    HomePage,
    LisBibliotecaPage,
    LisUsuariosPage,
    LoginPage,
    MyApp,
    ProgressBarComponent,
    SignupPage,
    UserInfoComponent,
    UserMenuComponent,
    UserAdminComponent,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CadAgendaPage,
    CadBibliotecaPage,
    EventoPage,
    HomePage,
    LisBibliotecaPage,
    LisUsuariosPage,
    LoginPage,
    MyApp,
    SignupPage,
    UserProfilePage
  ],
  providers: [
    AgendaService,
    AuthService,
    UserService,
    BibliotecaService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ]
})
export class AppModule {}
