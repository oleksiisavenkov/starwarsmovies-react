import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";
import VehicleViewAccordionItem from "./VehicleViewAccordionItem";
import SpeciesViewAccordionItem from "./SpeciesViewAccordionItem";

export interface SpeciesViewAccordionItemProps {
    speciesURLs: string[];
}

const SpeciesViewAccordion: React.FC<SpeciesViewAccordionItemProps> = ({ speciesURLs }) => {
  return <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body>
            <Accordion>
                {speciesURLs.map((speciesURL, index) => (
                    <SpeciesViewAccordionItem index={index} speciesURL={speciesURL} />
                ))}
            </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
}

export default SpeciesViewAccordion;