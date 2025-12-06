import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default function Home() {
  const [asin, setAsin] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (asin.trim() !== "") {
      navigate(`/optimize/${asin}`);
    }
  };

  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        SalesDuo Amazon Listing Optimizer
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Enter an ASIN to optimize or view the latest optimized products
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <TextField
          fullWidth
          label="Enter ASIN"
          variant="outlined"
          value={asin}
          onChange={(e) => setAsin(e.target.value)}
        />

        <Button variant="contained" size="large" onClick={handleSearch}>
          Optimize 🚀
        </Button>
      </Box>

      {/* 📌 Updated Global History Button */}
      <Button
        variant="outlined"
        size="large"
        sx={{ mt: 3 }}
        onClick={handleHistory}
      >
        View History 📚
      </Button>
    </Container>
  );
}
