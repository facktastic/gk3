/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { profileComponent } from './profile.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<profileComponent>;

describe('profilecomponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [profileComponent] });
        fixture = TestBed.createComponent(profileComponent);
        fixture.detectChanges();
    });


    
});
