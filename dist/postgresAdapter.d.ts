import { MemoryDB } from '@builderbot/bot';

import type { Contact, Credential, HistoryEntry } from './types';
declare class PostgreSQLAdapter extends MemoryDB {
    db: any;
    listHistory: HistoryEntry[];
    credentials: Credential;
    constructor(_credentials: Credential);
    init(): Promise<boolean | undefined>;
    getPrevByNumber(from: string): Promise<HistoryEntry | undefined>;
    save(ctx: HistoryEntry): Promise<void>;
    getContact(ctx: HistoryEntry): Promise<Contact | undefined>;
    saveContact(ctx: any): Promise<void>;
    checkTableExistsAndSP(): Promise<void>;
    createSP(): Promise<void>;
}
export { PostgreSQLAdapter };
//# sourceMappingURL=postgresAdapter.d.ts.map