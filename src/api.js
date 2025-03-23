import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2M4NWQxZGQwMGRmMTgzODFhM2RlNzE5NzM3YzcxZiIsIm5iZiI6MTc0MjY2MDY5NC41MzYsInN1YiI6IjY3ZGVlNDU2ZWJhOGZkN2EwZDY5NzVkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hM6Lffdq3GovTPzZNcHIUtgkH5kJ8WNd4nNvEXiRwy0";

const BASE_URL = "https://api.themoviedb.org/3/";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export async function fetchTrendingMovies(page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}trending/movie/day`, {
      params: {
        page,
        include_adult: false,
        language: "en-Us",
      },
      ...getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        include_adult: false,
        language: "en-Us",
      },
      ...getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}

export async function fetchCast(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        include_adult: false,
        language: "en-Us",
      },
      ...getHeaders(),
    });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        include_adult: false,
        language: "en-Us",
      },
      ...getHeaders(),
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
}

export async function fetchMovies(searchQuery) {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      ...getHeaders(),
      params: { query: searchQuery },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}
