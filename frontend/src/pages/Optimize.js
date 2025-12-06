import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container, Typography, CircularProgress, Card, CardContent, Button, Chip
} from "@mui/material";

export default function Optimize() {
  const { asin } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function run() {
      try {
        const scraped = await axios.get(`http://localhost:5000/api/scrape/${asin}`);
        const optimized = await axios.post(`http://localhost:5000/api/optimize`, {
          asin,
          ...scraped.data,
        });
        setData(optimized.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    run();
  }, [asin]);

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress size={50} />
        <Typography mt={2}>Processing your listing... 🔄</Typography>
      </Container>
    );
  }

  if (!data) return <h2>Failed to optimize!</h2>;

  const optimized = data.optimized;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Optimized Listing ✨
      </Typography>

      {/* TITLE */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">Optimized Title</Typography>
          <Typography>{optimized.optimizedTitle}</Typography>
        </CardContent>
      </Card>

      {/* BULLETS */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">Bullet Points</Typography>
          <ul>
            {optimized.optimizedBullets.map((b, i) => (
              <li key={i}><Typography>{b}</Typography></li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* DESCRIPTION */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">Product Description</Typography>
          <Typography>{optimized.optimizedDescription}</Typography>
        </CardContent>
      </Card>

      {/* KEYWORDS */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">SEO Keywords</Typography>
          {optimized.keywords.map((kw, i) => (
            <Chip key={i} label={kw} sx={{ m: 0.5 }} />
          ))}
        </CardContent>
      </Card>

      {/* HISTORY BUTTON */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4 }}
        onClick={() => navigate("/history")}

      >
        View Optimization History 📚
      </Button>
    </Container>
  );
}
