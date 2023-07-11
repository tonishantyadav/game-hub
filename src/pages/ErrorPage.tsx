import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <Heading>Error...</Heading>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text my={2}>
          {isRouteErrorResponse(error)
            ? "The page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
