import { Routes } from "@angular/router";
import { Forms } from "./forms";
import { ReactiveForm } from "./reactive-form/reactive-form";
import { FormArray } from "./form-array/form-array";

export const FORM_ROUTES: Routes = [{
    path: '',
    component: Forms,
    children: [
        {
            path: 'reactive-form',
            component: ReactiveForm
        },
        {
            path: 'form-array',
            component: FormArray
        }
    ]
}]