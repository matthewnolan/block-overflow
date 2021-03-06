export function promisify(func: any, args: any): Promise<any> {
    return new Promise((res, rej) => {
        func(...args, (err: any, data: any) => {
            if (err) return rej(err);
            return res(data);
        });
    });
}

export function promisiwrap<T>(value: T): Promise<T> {
    return new Promise((res) => {
        res(value)
    })
}
