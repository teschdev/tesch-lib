import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'thc-infinity-scrooler',
  templateUrl: './infinity-scrooler.component.html',
  styleUrls: ['./infinity-scrooler.component.scss']
})
export class InfinityScroolerComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  @ViewChild('ItemList', { static: false }) ItemList: ElementRef;

  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>;

  @Input() value: any[];

  @Input() page = 0;

  @Input() totalPages: number;

  @Input() totalRecords: number;

  @Input() height: number = 300

  @Input() itemListSize: number = 100

  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter<any>();

  fim = false;

  count = 15;

  offset = new BehaviorSubject(null);

  infinite: Observable<any[]>;

  arrayDataFull: any[] = [];

  ngAfterViewInit(): void {
    this.viewport.getElementRef().nativeElement.style.height = this.height + 'px';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.currentValue) {
      this.arrayDataFull = [ ...this.arrayDataFull, ...changes.value.currentValue]
    }
  }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load() {
    const nextPage = this.page + 1;
    if (nextPage < this.totalPages || !this.totalPages) this.onLazyLoad.emit({ page: nextPage });
  }

  async loadScrool(e) {
    const limit = this.height / this.itemListSize;
    const tresholder = this.arrayDataFull ? (this.arrayDataFull.length -1) - limit : 1;

    if (this.page && (e > tresholder)) await this.load();
  }
}
