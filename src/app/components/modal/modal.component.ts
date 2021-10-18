import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() header!: string;
	@Input() description!: string;
	@Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

	confirm() {
		this.isConfirmed.emit(true);
	}
	close() {
		this.isConfirmed.emit(false);
	}

}
