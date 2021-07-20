import { Component } from '@angular/core';
import {
  IPrograssTrackerItem,
  ProgressTrackerState,
} from './progress-tracker/progress-tracker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  progressStepItems: IPrograssTrackerItem[] = [
    {
      title: 'prova 1',
      description: 'description 1',
      state: ProgressTrackerState.ACTIVE,
    },
    {
      title: 'prova 2',
      description: 'description 2',
      state: ProgressTrackerState.REST,
    },
    {
      title: 'prova 3',
      description: 'description 3',
      state: ProgressTrackerState.REST,
    },
  ];
}
