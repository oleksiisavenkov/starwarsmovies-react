import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";

export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
}

export interface SpeciesViewAccordionItemProps {
    speciesURL: string;
    index: number;
}

const SpeciesViewAccordionItem: React.FC<SpeciesViewAccordionItemProps> = ({ speciesURL, index }) => {
  const [speciesData, setSpeciesData] = useState<Species | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSpeciesData = async () => {
        setLoading(true);
        try {
        const response = await axios.get<Species>(speciesURL);
        setSpeciesData(response.data);
        } catch (error) {
        console.error("Error fetching species:", error);
        } finally {
        setLoading(false);
        }
  };

  useEffect(() => {
    fetchSpeciesData();
  }, [speciesURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!speciesData) {
    return <div>No species found.</div>;
  }

  return (
    <>
        <AccordionItem eventKey={index.toString()}>
            <Accordion.Header>{speciesData?.name || 'Loading...'}</Accordion.Header>
            <Accordion.Body>
                <strong>Name:</strong> {speciesData.name}<br />
                <strong>Classification:</strong> {speciesData.classification}<br />
                <strong>Designation:</strong> {speciesData.designation}<br />
                <strong>Average Height:</strong> {speciesData.average_height}<br />
                <strong>Skin Colors:</strong> {speciesData.skin_colors}<br />
                <strong>Hair Colors:</strong> {speciesData.hair_colors}<br />
                <strong>Eye Colors:</strong> {speciesData.eye_colors}<br />
                <strong>Average Lifespan:</strong> {speciesData.average_lifespan}<br />
                <strong>Homeworld:</strong> {speciesData.homeworld}<br />
                <strong>Language:</strong> {speciesData.language}<br />
            </Accordion.Body>
        </AccordionItem>
    </>
  );
}

export default SpeciesViewAccordionItem;