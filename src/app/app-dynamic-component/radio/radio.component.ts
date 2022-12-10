import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() config: any;
  @Input() data: any;
  @Output() radioEvent = new EventEmitter();

  constructor(protected _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log('RadioComponent OnInit');
  }

  handleChange(evt: any) {
    this.radioEvent.emit(evt);
  }

  getData(): string {
    return 'getData() => RadioComponent';
  }

  safeHtml(html: string) {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
