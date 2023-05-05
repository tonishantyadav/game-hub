import { Skeleton, VStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <VStack spacing={2} align="stretch">
      {skeletons.map((skeleton) => (
        <Skeleton height="30px" key={skeleton} borderRadius="5px"/>
      ))}
    </VStack>
  );
};

export default GenreListSkeleton;
