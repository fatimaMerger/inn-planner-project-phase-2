import { Component, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, RoutesRecognized,
  RouteConfigLoadStart, RouteConfigLoadEnd,ActivatedRoute,
  NavigationEnd, NavigationCancel, NavigationError, GuardsCheckStart, ChildActivationStart, ActivationEnd, ChildActivationEnd, ResolveEnd, ResolveStart, GuardsCheckEnd, ActivationStart, } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';



@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  hideNavbar: boolean = false;
  isMobile: boolean = false;
  isTab: boolean = false;
  isToggled: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router) { 
    router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        console.log('ayy events',events)
        if (!(events[1].urlAfterRedirects.length > 2)) {
          console.log('if')
          setTimeout(() => {
          window.location.href = ''
          },5)
        } else {
          console.log('else')
        }
      });


    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.clear();
        // * NavigationStart: Navigation starts.
        console.log('NavigationStart --- ', event.url);
      }
      else if (event instanceof RouteConfigLoadStart) {
        // * RouteConfigLoadStart: Before the router lazy loads a route configuration.
        console.log('RouteConfigLoadStart --- ', event.toString());
      }
      else if (event instanceof RouteConfigLoadEnd) {
        // * RouteConfigLoadEnd: After a route has been lazy loaded.
        console.log('RouteConfigLoadEnd --- ', event.toString());
      }
      else if (event instanceof RoutesRecognized) {
        // * RoutesRecognized: When the router parses the URL and the routes are recognized.
        console.log('RoutesRecognized --- ', event.url);
      }
      else if (event instanceof GuardsCheckStart) {
        // * GuardsCheckStart: When the router begins the guards phase of routing.
        console.log('GuardsCheckStart --- ', event.url);
      }
      else if (event instanceof ChildActivationStart) {
        // * ChildActivationStart: When the router begins activating a route's children.
        console.log('ChildActivationStart --- ', event.toString());
      }
      else if (event instanceof ActivationStart) {
        // * ActivationStart: When the router begins activating a route.
        console.log('ActivationStart --- ', event.toString());
      }
      else if (event instanceof GuardsCheckEnd) {
        // * GuardsCheckEnd: When the router finishes the guards phase of routing successfully.
        console.log('GuardsCheckEnd --- ', event.url);
      }
      else if (event instanceof ResolveStart) {
        // * ResolveStart: When the router begins the resolve phase of routing.
        console.log('ResolveStart --- ', event.url);
      }
      else if (event instanceof ResolveEnd) {
        // * ResolveEnd: When the router finishes the resolve phase of routing successfully.
        console.log('ResolveEnd --- ', event.url);
      }
      else if (event instanceof ChildActivationEnd) {
        // * ChildActivationEnd: When the router finishes activating a route's children.
        console.log('ChildActivationEnd --- ', event.toString());
      }
      else if (event instanceof ActivationEnd) {
        // * ActivationEnd: When the router finishes activating a route.
        console.log('ActivationEnd --- ', event.toString());
      }
      else if (event instanceof NavigationEnd) {
        // * NavigationEnd: When navigation ends successfully.
        console.log('NavigationEnd --- ', event.url);
      }
      else if (event instanceof NavigationCancel) {
        // * NavigationCancel: When navigation is canceled.
        console.log('NavigationCancel --- ', event.url);
      }
      else if (event instanceof NavigationError) {
        // * NavigationError: When navigation fails due to an unexpected error.
        console.log('NavigationError --- ', event.error);
      }
    });
    
  }

  ngOnInit(): void {
    this.checkMobile();
    console.log(window.location.href)

  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onEvent(event:any) {
    this.checkMobile();
  }
  checkMobile() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth;
    if (windowWidth < 480) {
      this.isMobile = true;
    } else if (windowWidth <= 1024 && windowWidth > 480) {
      this.isTab = true;
    } else {
      this.isMobile = false;
    }
  }
  toggleMobileMenu() {
    this.isToggled = !this.isToggled;
  }
  closeMobileMenu() {
    console.log('what is happening; before: ', this.isToggled)
    this.isToggled = false;
    console.log('what is happening; After: ', this.isToggled)

  }

  closeMenu(route:string) {
    this.isToggled = false;
    this.router.navigate([`/${route}`]);
  }
  @HostListener('window:reload', ['$event'])
  reload(event: any) {
    console.log('reload')
  }
  checkUser() {
    console.log(window.location.href)
  }

}
