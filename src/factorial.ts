function factorial(numero:number):number{
    if(numero.toString().includes('.')){
        return -1;
    }
    return (numero == 0 ? 1 : numero * factorial(numero-1));
}

export default factorial;
