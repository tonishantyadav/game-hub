import { Badge } from "@chakra-ui/react";

interface Props {
  critic: number;
}

const CriticScore = ({ critic }: Props) => {
  let color = critic > 75 ? "green" : critic > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="5px" colorScheme={color}>
      {critic}
    </Badge>
  );
};

export default CriticScore;
