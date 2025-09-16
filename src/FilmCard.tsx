import React from 'react';
import Card from 'react-bootstrap/Card';
import { Film } from './FilmCardList';
import CharacterViewAccordionItem from './CharacterViewAccordionItem';
import { Accordion } from 'react-bootstrap';
import CharacterViewAccordion from './CharacterViewAccordion';
import StarshipViewAccordion from './StarshipViewAccordion';
import VehicleViewAccordion from './VehicleViewAccordion';
import SpeciesViewAccordion from './SpeciesViewAccordion';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <Card className="mb-3 film-card">
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text>
          <strong>Director: </strong> {film.director}<br />
          <strong>Release Date:</strong> {new Date(film.release_date).toLocaleDateString()}<br />
          <strong>Producers:</strong> {film.producer}<br />
          <strong>Opening Crawl:</strong>
          <p>{film.opening_crawl}</p>
          <CharacterViewAccordion characterURLs={film.characters} />
          <StarshipViewAccordion starshipURLs={film.starships} />
          <VehicleViewAccordion vehicleURLs={film.vehicles} />
          <SpeciesViewAccordion speciesURLs={film.species} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FilmCard;