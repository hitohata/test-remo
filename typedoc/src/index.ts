interface IMain {
    input: string
}

const main = (input: IMain) => {
    console.log(input.input);
}

main({input: ""});
