export const op = (op: string, id?: any) => {
    if(op === 'produtos') {
        return 'http://localhost:3000/'+op;
    }
}

