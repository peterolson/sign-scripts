import { type StokoeTabSymbol } from "./symbols.ts";

export type Tab = StokoeTabSymbol;
type Dez = {};
type Sig = {};

type StokoeWord = {
    tab: Tab;
};

export function parseStokoe(text: string): string {
    return text;
}
