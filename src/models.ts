export interface LetuscStatusEventPayload {
    connected: boolean;
    alive: boolean;
}

export interface LoginEventPayload {
    student_id: string;
    discord_id: string;
    password: string;
    username: string;
    discriminator: string;
}

export interface ExtendedLoginEventPayload extends LoginEventPayload {
    client: string;
}

export interface LoginProgressEventPayload {
    client: string;
    type: string;
    status: string;
    progress: number;
    total: number;
}