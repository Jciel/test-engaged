export function debounce(fn: (...args: any[]) => void, wait: number): (...args: any[]) => void {
    let timer: number | undefined;
    return function(...args: any[]){
        if(timer) {
            clearTimeout(timer);
        }

        // @ts-ignore
        const context = this;
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}