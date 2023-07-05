import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  // by appending ! to the slug(constant) we are telling the typescript compiler that this slug(constant)
  // can never be null
  const { data: game, error, isLoading } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Box margin={2}>
        <Heading marginBottom={4}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailPage;
