import { NextResponse } from "next/server";
import pokemons from "@/data/pokemons.json"

export async function GET() {
    return NextResponse.json(pokemons)
}