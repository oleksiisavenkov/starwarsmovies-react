import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";
import CharacterViewAccordionItem from "./CharacterViewAccordionItem";

export interface CharacterViewAccordionProps {
    characterURLs: string[];
}

const CharacterViewAccordion: React.FC<CharacterViewAccordionProps> = ({ characterURLs }) => {
  return <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Characters</Accordion.Header>
        <Accordion.Body>
            <Accordion>
            {characterURLs.map((characterURL, index) => (
                <CharacterViewAccordionItem index={index} characterURL={characterURL} />
            ))}
            </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
}

export default CharacterViewAccordion;