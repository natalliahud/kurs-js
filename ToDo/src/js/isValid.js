const regular = {
    usertitleValid: /[^а-яА-ЯёЁa-zA-Z.]+/g,
    usernameValid: /[^а-яА-ЯёЁa-zA-Z].+/g,
}

const valid = {
    isUsertitle: (usertitle) => {
        return regular.usertitleValid.test(usertitle)
    },
    isUsername: (username) => {
        return regular.usernameValid.test(username)
    },
};
export const isUsertitle = valid.isUsertitle;
export const isUsername  = valid.isUsername;