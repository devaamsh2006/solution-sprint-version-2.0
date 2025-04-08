import React from "react";
const timelineData = [
    {
        date: "February 2022",
        title: "Application UI code in Tailwind CSS",
        description:
            "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        link: "#",
        showLink: true,
    },
    {
        date: "March 2022",
        title: "Marketing UI design in Figma",
        description:
            "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
        showLink: false,
    },
    {
        date: "April 2022",
        title: "E-Commerce UI code in Tailwind CSS",
        description:
            "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
        showLink: false,
    },
];

const EventTimeLine = () => {
    return (
        <div>
            <h1 className="text-center">EventTimeLine</h1>
        </div>
    )
}

export default EventTimeLine
