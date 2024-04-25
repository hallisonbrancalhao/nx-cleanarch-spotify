import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from '@nx-cleanarch-spotify/player';
import { ContentComponent } from '@nx-cleanarch-spotify/content';
import { NavbarComponent } from '@nx-cleanarch-spotify/navbar';

@Component({
  selector: 'lib-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PlayerComponent,
    ContentComponent,
    NavbarComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
