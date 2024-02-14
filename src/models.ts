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

export enum StatusType {
    START = "start",
    SUCCESS = "success",
    WAIT = "wait",
    CLICK = "click",
    INPUT = "input",
    END = "end",
    ERROR = "error",
}

export interface LoginProgressEventPayload {
    client: string;
    type: string;
    message: string;
    status: StatusType;
    progress: number;
    total: number;
}