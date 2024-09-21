import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React from "react";
import PropTypes from "prop-types";
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";

const TodoCard = (props) => {
  return (
    <>
      <Card className="max-w-[400px] container mx-auto mt-16 bg-slate-950 text-white">
        <CardHeader className="font-bold text-lg">
          {props.day} ({props.numberOfActicities})
        </CardHeader>
        <CardBody>
          <ul className="list-decimal list-inside">
            <li>Front-End Developer</li>
            <li>Back-End Developer</li>
            <li>UI/UX Design</li>
          </ul>
        </CardBody>
        <CardFooter>
          <p className="p-4">{props.propsTambahan}</p>
          <Button className="p-2 bg-teal-600 text-white tracking-wider">
            Add List
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

TodoCard.propTypes = {
  day: PropTypes.string,
  numberOfActicities: PropTypes.number,
};

export default withBackground(withAlert(TodoCard));
