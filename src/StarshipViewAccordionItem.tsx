import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";

export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
}

export interface StarshipViewAccordionItemProps {
    starshipURL: string;
    index: number;
}

const StarshipViewAccordionItem: React.FC<StarshipViewAccordionItemProps> = ({ starshipURL, index }) => {
  const [starshipData, setStarshipData] = useState<Starship | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStarshipData = async () => {
        setLoading(true);
        try {
        const response = await axios.get<Starship>(starshipURL);
        setStarshipData(response.data);
        } catch (error) {
        console.error("Error fetching starship:", error);
        } finally {
        setLoading(false);
        }
  };

  useEffect(() => {
    fetchStarshipData();
  }, [starshipURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!starshipData) {
    return <div>No starship found.</div>;
  }

  return (
    <>
        <AccordionItem eventKey={index.toString()}>
            <Accordion.Header>{starshipData?.name || 'Loading...'}</Accordion.Header>
            <Accordion.Body>
                <strong>Name:</strong> {starshipData.name}<br />
                <strong>Model:</strong> {starshipData.model}<br />
                <strong>Manufacturer:</strong> {starshipData.manufacturer}<br />
                <strong>Cost in Credits:</strong> {starshipData.cost_in_credits}<br />
                <strong>Length:</strong> {starshipData.length}<br />
                <strong>Max Atmosphering Speed:</strong> {starshipData.max_atmosphering_speed}<br />
                <strong>Crew:</strong> {starshipData.crew}<br />
                <strong>Passengers:</strong> {starshipData.passengers}<br />
                <strong>Cargo Capacity:</strong> {starshipData.cargo_capacity}<br />
                <strong>Consumables:</strong> {starshipData.consumables}<br />
                <strong>Hyperdrive Rating:</strong> {starshipData.hyperdrive_rating}<br />
                <strong>MGLT:</strong> {starshipData.MGLT}<br />
                <strong>Starship Class:</strong> {starshipData.starship_class}<br />
            </Accordion.Body>
        </AccordionItem>
    </>
  );
}

export default StarshipViewAccordionItem;