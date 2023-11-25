"use server";

const MAX_LIMIT = 8;

export const fetchAnime = async (page: number) =>
    (
        await fetch(
            `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
        )
    ).json();
