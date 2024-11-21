import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Code } from "lucide-react";

const MaterialCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#1f2937" : "white",
        color: (theme) => (theme.palette.mode === "dark" ? "white" : "inherit"),
      }}
    >
      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <Code color="#6366f1" />
        <Typography variant="h6" component="div">
          Material UI
        </Typography>
      </Box>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#9ca3af" : "inherit",
          }}
        >
          This card is styled using Material UI components, demonstrating the
          integration of the Material Design system with React components.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
