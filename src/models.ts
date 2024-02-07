export interface LetuscStatusEventPayload {
    vpn_status: string;
    discord_bot_status: string;
}

export interface LoginEventPayload {
    email: string;
    password: string;
}

export interface ExtendedLoginEventPayload extends LoginEventPayload {
    client: string;
}

export interface LoginProgressEventPayload {
    client: string;
    progress: number;
}