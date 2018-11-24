import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'case'
})
export class CasePipe implements PipeTransform {
    readonly propositions = ['on', 'in', 'of', 'the', 'is', 'are'];

    transform(value: string) {
        if (!value)
            return null;

        const words = value.split(" ");
    
        for (let i = 0; i < words.length; i++) {
            if (i === 0 || !this.propositions.includes(words[i].toLowerCase())) 
                words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
            else 
                words[i] = words[i].toLowerCase();
        }
        return words.join(" ");
    }
}