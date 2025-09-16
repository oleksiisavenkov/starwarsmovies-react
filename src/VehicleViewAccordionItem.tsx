import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { Accordion, AccordionItem } from "react-bootstrap";

export interface Vehicle {
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
    vehicle_class: string;
}

export interface VehicleViewAccordionItemProps {
    vehicleURL: string;
    index: number;
}

const VehicleViewAccordionItem: React.FC<VehicleViewAccordionItemProps> = ({ vehicleURL, index }) => {
  const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchVehicleData = async () => {
        setLoading(true);
        try {
        const response = await axios.get<Vehicle>(vehicleURL);
        setVehicleData(response.data);
        } catch (error) {
        console.error("Error fetching vehicle:", error);
        } finally {
        setLoading(false);
        }
  };

  useEffect(() => {
    fetchVehicleData();
  }, [vehicleURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!vehicleData) {
    return <div>No vehicle found.</div>;
  }

  return (
    <>
        <AccordionItem eventKey={index.toString()}>
            <Accordion.Header>{vehicleData?.name || 'Loading...'}</Accordion.Header>
            <Accordion.Body>
                <strong>Name:</strong> {vehicleData.name}<br />
                <strong>Model:</strong> {vehicleData.model}<br />
                <strong>Manufacturer:</strong> {vehicleData.manufacturer}<br />
                <strong>Cost in Credits:</strong> {vehicleData.cost_in_credits}<br />
                <strong>Length:</strong> {vehicleData.length}<br />
                <strong>Max Atmosphering Speed:</strong> {vehicleData.max_atmosphering_speed}<br />
                <strong>Crew:</strong> {vehicleData.crew}<br />
                <strong>Passengers:</strong> {vehicleData.passengers}<br />
                <strong>Cargo Capacity:</strong> {vehicleData.cargo_capacity}<br />
                <strong>Consumables:</strong> {vehicleData.consumables}<br />
                <strong>Vehicle Class:</strong> {vehicleData.vehicle_class}<br />
            </Accordion.Body>
        </AccordionItem>
    </>
  );
}

export default VehicleViewAccordionItem;