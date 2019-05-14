import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent implements OnInit, OnDestroy {
    
    public ngOnInit(): void {
        
    }
    public ngOnDestroy(): void {

    }
}