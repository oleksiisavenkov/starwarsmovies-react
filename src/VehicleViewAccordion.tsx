import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";
import VehicleViewAccordionItem from "./VehicleViewAccordionItem";
import StarshipViewAccordionItem from "./StarshipViewAccordionItem";
import StarshipViewAccordion from "./StarshipViewAccordion";

export interface VehicleViewAccordionItemProps {
    vehicleURLs: string[];
}

const VehicleViewAccordion: React.FC<VehicleViewAccordionItemProps> = ({ vehicleURLs }) => {
  return <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Vehicles</Accordion.Header>
        <Accordion.Body>
            <Accordion>
                {vehicleURLs.map((vehicleURL, index) => (
                    <VehicleViewAccordionItem index={index} vehicleURL={vehicleURL} />
                ))}
            </Accordion>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
}

export default VehicleViewAccordion;