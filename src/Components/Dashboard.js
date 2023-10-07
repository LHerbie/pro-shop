import { CardContent, CardActions, Button, Card, Typography, Box, Grid } from "@mui/material";
import { PieChart, BarChart } from "@mui/x-charts";

export default function Dashboard() {
    return (
    <Box>
    <br />
    <Grid container spacing={0.1}>
        <Grid item xs={7}>
            <Card sx={{ minWidth: 275, m: 1.5 }} >
                <CardContent>
                    <BarChart 
                        xAxis={[{ scaleType: 'band', data: [ 'Items' ] }]}
                       series={[{ data: [10], label: 'Rackets' }, { data: [5], label: 'Bags' }, { data: [5], label: 'Shoes' }, { data: [13], label: 'Clothes' }, { data: [17], label: 'Misc.' },]}
                        width={800}
                        height={350}
/>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid>
        <Grid item xs={5}>
            <Card sx={{ minWidth: 275, m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        50
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Items currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid>
        <Grid item xs={ 2.4 }>
            <Card sx={{ m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        10
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Rackets currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid>
        <Grid item xs={ 2.4 }>
            <Card sx={{ m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        5
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Bags currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid> 
        <Grid item xs={ 2.4 }>
            <Card sx={{ m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        5
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Clothes currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid> 
        <Grid item xs={ 2.4 }>
            <Card sx={{ m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        13
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Misc. items currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid> 
        <Grid item xs={ 2.4 }>
            <Card sx={{ m: 1.5 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ align: "center" }}>
                        17
                    </Typography>
                    <Typography sx={{ mb: 1.5, align: "center" }} color="text.secondary">
                        Shoes currently in stock.
                     </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions> 
            </Card>
        </Grid> 
    </Grid>
    </Box>
    )
}