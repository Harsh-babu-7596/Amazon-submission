import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container, Typography, Card, CardContent, Chip, Button
} from "@mui/material";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history")
      .then(res => {
        const parsed = res.data.map(item => ({
          ...item,
          optimizedBullets: JSON.parse(item.optimizedBullets || "[]"),
          optimizedKeywords: JSON.parse(item.optimizedKeywords || "[]")
        }));
        setHistory(parsed);
      });
  }, []);

  if (!history.length) return <h2 style={{ padding: 30 }}>No history found 📭</h2>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Latest Optimizations 🕘
      </Typography>

      {history.map((item) => (
        <Card key={item.id} sx={{ mt: 3, cursor: "pointer" }}>
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
              {new Date(item.createdAt).toLocaleString()}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              {item.optimizedTitle}
            </Typography>

            <Typography sx={{ mt: 1 }}>ASIN: {item.asin}</Typography>

            <div style={{ marginTop: "10px" }}>
              {item.optimizedKeywords.slice(0, 3).map((kw, i) => (
                <Chip key={i} label={kw} sx={{ mr: 1, mb: 1 }} />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
