import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {AdDirective} from './ad.directive';
import {AdItem} from './ad-item';
import {AdComponent} from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div>
      <ng-template adHost></ng-template>
    </div>`
})

export class AdBannerComponent implements OnInit, OnDestroy {
  currentAdIndex = -1;
  @Input() ads: AdItem[];
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => this.loadComponent(), 2000);
  }

}
