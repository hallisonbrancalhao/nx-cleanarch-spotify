import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedUtilCore } from '@nx-cleanarch-spotify/shared-util-core';

@Component({
  selector: 'lib-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  sharedUtilCoreValue = sharedUtilCore();
}
