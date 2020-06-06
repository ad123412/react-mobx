

class Math{
    @log
    add(a,b){
        return a+b;
    }
}

const log = (target, name, descriptor) => {
    console.log(descriptor);
    const original = descriptor.value;
    descriptor.value = (arguments) => {
        console.log(`Calling "${name}" with ` , arguments);
        const result = original.apply(this, arguments);
        console.log(`Result = ${result}`);
        return result;
    }
    return descriptor;
}

let math = new Math();
math.add(4,9);