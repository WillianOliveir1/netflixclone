const API_KEY = "bec9add770cc05f597bd5164e7fec8c1";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    return await req.json();
}

export default {
	async getHomeList () {
        return [{
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async(movieId, type) => {
        // {movieId && (type === "movie" return ?
        // 	await basicFetch((`/movie/${ movieId }?language=pt-BR&api_key=${API_KEY}`))
        // :   await basicFetch((`/tv/${ movieId }?language=pt-BR&api_key=${API_KEY}`));

        if (movieId && [ 'movie', 'tv' ].includes(type)) {
            return await basicFetch((`/${type}/${ movieId }?language=pt-BR&api_key=${API_KEY}`))
		}
    }
}
