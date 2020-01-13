
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.addMatchMediaListener();
  }

  public ngOnDestroy(): void {
    this.removeMatchMediaListener();
  }

  private addMatchMediaListener(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  private removeMatchMediaListener(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
