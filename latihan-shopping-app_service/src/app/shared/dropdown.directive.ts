import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.btn-info') isOpen = false

    @HostListener('click') toggleOpen() {
        this.isOpen = true
    }
}
