export function debounce(fn: Function, wait: number): Function {
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