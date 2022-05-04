function createUser(user: user): { id: string | "", username: string | "", email: string | ""} {
    let finalUser = {
        id: '', 
        username: '', 
        email: '',
        registeredAt: new Date(),
        emojis: [],
        emoji: '',
        connectedAccounts: [],
        discord: {},
    };
    if (user.id) {
        finalUser.id = user.id;
    }
    if (user.username) {
        finalUser.username = user.username;
    }

    if (user.email) {
        finalUser.email = user.email;
    }

    return finalUser;
}

export const useUser = () => useState<user>('user', () => {
    const finalUser = <user> {
        id: '', 
        username: '', 
        email: '',
        registeredAt: new Date(),
        emojis: [],
        emoji: '',
        connectedAccounts: [],
        discord: {},
    };

    

    return createUser(finalUser);
});