import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webDemo';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private idle: Idle,
    private keepalive: Keepalive
  ) {}

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((currentPath: any) => {
      //   if (currentPath.url != '/' && currentPath.url != '/login') {
      //     console.log(currentPath.url);
          
      //     // sets an idle timeout of 5 seconds, for testing purposes.
      //     this.idle.setIdle(5);
      //     // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      //     this.idle.setTimeout(5);
      //     // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      //     this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      //     this.idle.onIdleEnd.subscribe(
      //       () => (this.idleState = 'No longer idle.')
      //     );
      //     this.idle.onTimeout.subscribe(() => {
      //       this.idleState = 'Timed out!';
      //       this.timedOut = true;
      //     });
      //     this.idle.onIdleStart.subscribe(
      //       () => (this.idleState = "You've gone idle!")
      //     );
      //     this.idle.onTimeoutWarning.subscribe(
      //       (countdown) =>
      //         (this.idleState =
      //           'You will time out in ' + countdown + ' seconds!')
      //     );

      //     this.reset();
      //   }
      //   else{
      //     console.log(currentPath.url);
      //     this.idle.stop();
      //   }
       });
  }
}
