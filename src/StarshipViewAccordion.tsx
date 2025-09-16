import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";
import StarshipViewAccordionItem from "./StarshipViewAccordionItem";

export interface StarshipViewAccordionItemProps {
    starshipURLs: string[];
}

const StarshipViewAccordion: React.FC<StarshipViewAccordionItemProps> = ({ starshipURLs }) => {
  return <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Starships</Accordion.Header>
        <Accordion.Body>
            <Accordion>
                {starshipURLs.map((starshipURL, index) => (
                    <StarshipViewAccordionItem index={index} starshipURL={starshipURL} />
                ))}
            </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
}

export default StarshipViewAccordion;