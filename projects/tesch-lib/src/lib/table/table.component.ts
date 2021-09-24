import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { PageControl } from './interfaces/page-control';
import { ButtonPageControls } from './models/buttons-page-controls';

@Component({
  selector: 'thc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @ContentChild('header', { static: false}) tableHeader: TemplateRef<any>;

  @ContentChild('body', { static: false }) tableBody: TemplateRef<any>;

  @ContentChild(TemplateRef, { static: false }) tableFooterRef: TemplateRef<any>;

  @Input() value: any[];

  @Input() paginate: boolean;

  @Input() page: number;

  @Input() totalRows: number;

  @Input() rows: number;

  @Input() lazy: boolean;

  @Input() colunas: any[];

  @Input() rowPerPageSelect: number[] = [5, 10, 50, 100];

  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter<any>();

  showPages: number[] = [];

  pageButtonControls: ButtonPageControls = new ButtonPageControls();

  fullValuesOnVirtualPaginate: any[] = [];

  ngOnInit(): void {
    this.dispatchLazyLoad();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.currentValue) {
      this.reloadPagesControl();
      this.virtualPaginate();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalRows / this.rows);
  }

  gotToPage({ next, prev, start, finish, page }: PageControl) {
    if (next) this.page += 1;

    if (prev) this.page -= 1;

    if (start) this.page = 1;

    if (finish) this.page = this.getTotalPages();

    if (page) this.page = page;

    this.reloadPagesControl()
    this.dispatchLazyLoad();
    this.getVirtualPage();
  }

  dispatchLazyLoad() {
    if (this.lazy) this.onLazyLoad.emit({ page: this.page || 1 });
  }

  private getVirtualPage() {
    if (!this.page && this.lazy) return;

    this.value = [...this.fullValuesOnVirtualPaginate[this.page-1]];
  }

  private getAllValues() {
    if (!this.fullValuesOnVirtualPaginate.length) return this.value;

    return this.fullValuesOnVirtualPaginate.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
  }

  virtualPaginate(){
    if (!this.page && this.lazy) return;


    const allValues = this.getAllValues();
    this.fullValuesOnVirtualPaginate = [];
    let paginas = [];

    allValues.forEach((item, index, array) => {
      paginas.push(item);
      if ((index + 1) % this.rows === 0 || (index + 1) === array.length) {
        this.fullValuesOnVirtualPaginate.push(paginas);
        paginas = [];
      }
    })

    this.reloadPagesControl();
    this.getVirtualPage();
  }

  private reloadPagesControl() {
    this.pageButtonControls.next = !this.isLastPage();
    this.pageButtonControls.last = !this.isLastPage();
    this.pageButtonControls.prev = !this.isFirstPage();
    this.pageButtonControls.first = !this.isFirstPage();
    this.showPages = [];


    if (this.page > 1 && this.page < (this.getTotalPages() - 1) ) {

      this.showPages =  [this.page -1, this.page, this.page + 1]
      return;
    }

    if (this.isFirstPage()) {
      const limite = 3;
      let contador = 0;

      while(contador < limite) {
        if ((this.page + contador) <= this.getTotalPages()) this.showPages = [...this.showPages, this.page + contador];
        contador++;
      }
      return;
    }

    if (this.isLastPage()) {
      const limite = 0;
      let contador = 2;

      while(contador >= limite) {
        if ((this.page - contador) >= 1) this.showPages = [...this.showPages, this.page - contador];
        contador--;
      }
    }
  }

  private isLastPage(): boolean {
    return this.page === this.getTotalPages();
  }

  private isFirstPage(): boolean {
    return this.page === 1;
  }
}


