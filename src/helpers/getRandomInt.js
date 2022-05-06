const getRandomInt = () => {
    return new Promise((resolve) => {
        const randomNumber = Math.floor(Math.random() * 10 + 1);

        setTimeout(() => {
            resolve(randomNumber);
        }, 2000);
    });
};

export default getRandomInt;
