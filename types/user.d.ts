declare interface capes {
    current: string,
    all: Array<string>
}

declare interface skin {
    id: string,
    hidden: boolean,
}

declare interface skins {
    current: string,
    history: Array<skin>
}

declare interface connectedAccount {
    username: string,
    uuid: string,
    skins: Array<skins>,
    capes: Array<capes>
}

declare interface discordDetails {
    username: string,
    discrim: string,
}

declare interface user {
    id: string,
    username: string,
    email: string,
    registeredAt?: Date,
    verified?: Boolean,
    emojis?: Array<string>,
    emoji?: string,
    connectedAccounts?: Array<connectedAccount>,
    discord?: discordDetails
}