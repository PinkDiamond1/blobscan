import React from "react";
import { Container, Box } from "@chakra-ui/react";

import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const InnerPagesLayout = ({ children }: LayoutProps) => {
  return (
    <Box pos="absolute" bgColor="neutral.50" minW="100vw" minH="100vh">
      <Container size={["sm", "lg"]} variant="shadow">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default InnerPagesLayout;
