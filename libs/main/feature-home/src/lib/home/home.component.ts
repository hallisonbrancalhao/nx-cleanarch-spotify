import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataAccess } from '@nx-cleanarch-spotify/api';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data = dataAccess();
}
