import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Box margin={2}>
        <Heading marginBottom={4}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
        <GameTrailer gameId={game.id} />
      </Box>
    </>
  );
};

export default GameDetailPage;
