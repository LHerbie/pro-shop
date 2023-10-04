import { CardContent, CardActions, Button, Card, Typography } from "@mui/material";

export default function Dashboard() {
    return (
        <Card sx={{ maxWidth: 275, m: 1 }}>
      <CardContent>&nbsp;
        <Typography variant="h5" component="div">
          10
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rackets currently in stock.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more</Button>
      </CardActions>
    </Card>
    )
}