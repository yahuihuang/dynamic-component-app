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

    Employee = [
      {"id":"1","employee_name":"WdqBvFe","employee_salary":"797","employee_age":"36","profile_image":""},
      {"id":"1925","employee_name":"Menaka6","employee_salary":"24501","employee_age":"24501","profile_image":""},
      {"id":"1969","employee_name":"2381","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1970","employee_name":"6132","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1972","employee_name":"2022","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1973","employee_name":"4604","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1976","employee_name":"Shylu","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1977","employee_name":"8221","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1981","employee_name":"111test","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1996","employee_name":"test-709","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1997","employee_name":"test-654","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"1999","employee_name":"test-127","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"2001","employee_name":"test-301","employee_salary":"123","employee_age":"23","profile_image":""},
      {"id":"2003","employee_name":"1769","employee_salary":"123","employee_age":"23","profile_image":""}
    ]

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
