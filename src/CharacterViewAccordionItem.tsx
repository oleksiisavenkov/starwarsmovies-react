import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
}

export interface CharacterViewButtonProps {
    characterURL: string;
    index: number;
}

const CharacterViewAccordionItem: React.FC<CharacterViewButtonProps> = ({ characterURL, index }) => {
  const [characterData, setCharacterData] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacterData = async () => {
        setLoading(true);
        try {
        const response = await axios.get<Character>(characterURL);
        setCharacterData(response.data);
        } catch (error) {
        console.error("Error fetching character:", error);
        } finally {
        setLoading(false);
        }
  };

  useEffect(() => {
    fetchCharacterData();
  }, [characterURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!characterData) {
    return <div>No character found.</div>;
  }

  return (
    <>
        <AccordionItem eventKey={index.toString()}>
            <Accordion.Header>{characterData?.name || 'Loading...'}</Accordion.Header>
            <Accordion.Body>
                <strong>Name:</strong> {characterData.name}<br />
                <strong>Height:</strong> {characterData.height} cm<br />
                <strong>Mass:</strong> {characterData.mass} kg<br />
                <strong>Hair Color:</strong> {characterData.hair_color}<br />
                <strong>Skin Color:</strong> {characterData.skin_color}<br />
                <strong>Eye Color:</strong> {characterData.eye_color}<br />
                <strong>Birth Year:</strong> {characterData.birth_year}<br />
            </Accordion.Body>
        </AccordionItem>
    </>
  );
}

export default CharacterViewAccordionItem;