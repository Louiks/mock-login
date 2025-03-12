import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'strengthen'
})
export class StrengthenPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return value;

        const words: string[] = value.split(' ');
        if (words.length > 0) {
            words[0] = `<strong>${words[0]}</strong>`;
        }

        return words.join(' ');
    }

}
