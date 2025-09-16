import React from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import FilmCard from './FilmCard';

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // ISO date string
  characters: string[]; // URLs
  planets: string[];    // URLs
  starships: string[];  // URLs
  vehicles: string[];   // URLs
  species: string[];    // URLs
  created: string;      // ISO datetime string
  edited: string;       // ISO datetime string
  url: string;          // URL to the film resource
}

const FilmCardList: React.FC = () => {
  const [films, setFilms] = useState<Film[] | undefined>(undefined);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [filteredFilms, setFilteredFilms] = useState<Film[] | undefined>(undefined);

  const fetchFilms = async () => {
    setFilms(undefined); // Indicate loading state
    try {
      const response : AxiosResponse<{ results: Film[] }> = await axios.get<{ results: Film[] }>('https://swapi.py4e.com/api/films/');
      setFilms(response.data.results);
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  useEffect(() => {
    if (films) {
      const filtered = films.filter(film =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFilms(filtered);
    }
  }, [searchTerm, films]);

  return (
    <div className="film-card-list-container">
        <h2>Star Wars Films</h2>

        <input type="text" placeholder="Search films..." className="search-input" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="film-card-list">
        {filteredFilms ? filteredFilms.map((film) => (
            <FilmCard key={film.episode_id} film={film} />
        )) : <p>Loading...</p>}
        </div>
    </div>
  );
}

export default FilmCardList;
