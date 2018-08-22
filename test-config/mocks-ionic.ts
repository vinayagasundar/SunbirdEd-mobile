import { CourseUtilService } from './../src/service/course-util.service';
import { AppGlobalService } from './../src/service/app-global.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService, ContainerService, PermissionService, TelemetryService, GenieSDKServiceProvider } from "sunbird";
import { ImageLoaderConfig } from "ionic-image-loader";
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { App } from 'ionic-angular';

declare let readJSON: any;

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return fn();
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }

  public exitApp(): any {
    return;
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault: () => ({})
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
  onDeepLink() {
    return;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): any {
    return;
  }

}

export class DeepLinkerMock { }

export class AuthServiceMock extends AuthService {
  public getSessionData(successCallback: any): void { }
  public endSession: () => ({})
}

export class ContainerServiceMock extends ContainerService {
}
export class PermissionServiceMock {

  public requestPermission: () => ({});
}
export class ImageLoaderConfigMock extends ImageLoaderConfig {
  public enableDebugMode() {
    return true;
  }
  public setMaximumCacheSize(limit: number) {
    return;
  }
}

export class TelemetryServiceMock extends TelemetryService {
  end: () => ({});
  interact: () => ({});
}

export class AppGlobalServiceMock extends AppGlobalService {
  static isGuestUser: boolean;
  static session: any;
  isUserLoggedIn(): boolean {
    return AppGlobalServiceMock.isGuestUser;
  }
  getSessionData(): any{
    return AppGlobalServiceMock.session;
  }

  static setLoggedInStatus(status: boolean) {
    AppGlobalServiceMock.isGuestUser = status;
  }

  static setSessionData(session: any) {
    AppGlobalServiceMock.session = session;
  }

}


export class CourseUtilServiceMock extends CourseUtilService { }

export class TranslateServiceStub {
  public get(key: any): any {
    Observable.of(key);
  }
  use: () => ({})
  // get: () => ({
  //     subscribe: () => ({})
  // })
}

export class TranslateLoaderMock implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang == "mr") {
      let ru = readJSON('assets/i18n/mr.json');
      return Observable.of(ru);
    }
    let en = readJSON('assets/i18n/en.json');
    return Observable.of(en);
  }
}


export class NavParamsMock {
  data = {
  };

  get(param) {
    return this.data[param] ? this.data[param] : this.data;
  }
}

export class GenieSDKServiceProviderMock extends GenieSDKServiceProvider {
  GenieSDK = {
    genieSdkUtil: {}
  };
  getSharedPreference() {
    return (<any>window).GenieSDK['preferences'];
  }
}

export class SharedPreferencesMock {
  getString: (value, callback) => ({})
}

export class FileUtilMock {
  internalStoragePath() {
    return '';
  }
}

export class NavControllerMock { }

export class SocialSharingMock {
  share(message, subject, file, url) {
    return '';
  }
}

export class ViewControllerMock { }

// export class ToastControllerMock {
//   create: () => ({
//     present: () => ({})
//   })
// }

export class StorageMock { }

export class AppVersionMock {

}

export class FormAndFrameworkUtilServiceMock {
  // checkNewAppVersion: () => ({
  //   then: () => ({
  //     catch: () => ({})
  //   })
  // })
  public checkNewAppVersion(): Promise<string> {
    return new Promise((resolve) => {
      resolve('');
    });

  }

}

export class profileServiceMock {
  getCurrentUser: () => ({})
}

export class eventsMock {
  publish: () => ({})
}

export class appMock extends App {
  _getPortal(): any { return {} };
  getRootNav: () => ({
    setRoot: () => ({})
  });
}

export class NavControllerBase {

}

export class ToastControllerMock {
  
  _getPortal(): any { return {} };
  create(options?: any) {
    return new ToastMock;
  };
}
/*export class ToastMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner', 'onDidDismiss']);
    instance.present.and.returnValue(Promise.resolve());

    return instance;
  }
}

export class ToastControllerMock {
  public static instance(toast?: ToastMock): any {

    let instance = jasmine.createSpyObj('ToastController', ['create']);
    instance.create.and.returnValue(toast || ToastMock.instance());

    return instance;
  }
}*/

class ToastMock {
  present() { };
  dismissAll() { };
}