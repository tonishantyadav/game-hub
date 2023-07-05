import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length < limit) return <Text>{children}</Text>;

  const description = expanded
    ? children
    : children.substring(0, limit) + "...";
  return (
    <Text>
      {description}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        Show more
      </Button>
    </Text>
  );
};

export default ExpandableText;
