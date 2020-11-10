/// <reference types="node" />
import { EventEmitter } from 'events';
declare class SocketEventEmitter<T extends string> extends EventEmitter {
    protected _maxListeners: number;
    protected _handlers: {
        [event: string]: ((...args: any[]) => void)[];
    };
    addListener: (event: T, listener: (...args: any[]) => void) => this;
    once: (event: T, listener: (...args: any[]) => void) => this;
    removeListener: (event: T, listener: (...args: any[]) => void) => this;
    off: (event: T, listener: (...args: any[]) => void) => this;
    removeAllListeners: (event?: T | undefined) => this;
    setMaxListeners: (n: number) => this;
    getMaxListeners: () => number;
    listeners: (event: T) => Function[];
    rawListeners: (event: T) => Function[];
    listenerCount: (event: T) => number;
    prependListener: (event: any, listener: (...args: any[]) => void) => this;
    prependOnceListener: (event: T, listener: (...args: any[]) => void) => this;
    eventNames: () => (T)[];
    on: (event: T, listener: (...args: any[]) => void) => this;
    emit: (event: T, ...args: any[]) => boolean;
}
export default SocketEventEmitter;
