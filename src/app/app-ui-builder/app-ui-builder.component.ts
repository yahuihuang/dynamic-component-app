import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddComponent } from '../add.component';
import { AppComponentHostDirective } from '../app-component-host.directive';
import { RadioComponent } from '../app-dynamic-component/radio/radio.component';

@Component({
    selector: 'app-ui-builder',
    templateUrl: './app-ui-builder.component.html',
    styleUrls: [],
  })
  export class AppUIBuilderComponent implements OnInit, OnDestroy, OnChanges {
    @Input() components!: AddComponent[];
    @ViewChild(AppComponentHostDirective, { static: true, read: AppComponentHostDirective })
    componentHost!: AppComponentHostDirective;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.buildComponents();
    }

    ngOnInit(): void {
        this.buildComponents();
    }

    private buildComponents() {
        this.componentHost.viewContainerRef.clear();

        for (const component of this.components) {
            if (!!component) {
                const viewContainerRef = this.componentHost.viewContainerRef;
                const componentRef = viewContainerRef.createComponent<AddComponent>(component.component);
                componentRef.instance.config =  component.config;
                componentRef.instance.data = component.config.data;

                if (component.config.componentType == 'radio') {
                  console.log(componentRef.instance.getData());
                  if (componentRef.instance instanceof RadioComponent) {
                    const sub: Subscription = componentRef.instance.radioEvent.subscribe((event: any) => {
                      this.onRadioChange(event)
                    });
                  }
                }
            }

        }
    }

    ngOnDestroy(): void {
        this.components = [];
    }

    // @HostListener('radioEvent', ['$event'])
    // @HostListener('radioEvent')
    onRadioChange(event: any) {
        console.log(event);
        console.log('event.srcElement.id: ' + event.srcElement.id);
        console.log('event.srcElement.name: ' + event.srcElement.name);
    }

    // @HostListener('click')
    // onclick() {
    //   console.log('click')
    // }
  }
