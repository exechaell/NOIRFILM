const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4eeefc54e267ba90dfc75ab997cf0526',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;