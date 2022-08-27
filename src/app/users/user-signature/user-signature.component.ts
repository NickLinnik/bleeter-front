import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-signature',
  templateUrl: './user-signature.component.html',
  styleUrls: ['./user-signature.component.css']
})
export class UserSignatureComponent {
  @Input() userName?: string
  @Input() login!: string
}
