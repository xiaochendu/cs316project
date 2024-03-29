import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import Divider from '@material-ui/core/Divider';
import {lighten} from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

import Pending from '../pending/main.pending';

const useStyles = makeStyles(theme => ({
    box: {
        maxWidth: 900
    },
    card: {
        borderRadius: "0px",
        margin: 10,
        backgroundColor: lighten(theme.palette.primary.main, 0.95),
    },
    sides: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        marginTop: 45,
        color: "#40babf",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    }
  }));

export default function Options() {
    const classes = useStyles();
    return(
        <Container className={classes.box}>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <Card className={classes.card} border={0}>
                        <CardContent>

                        <Container className={classes.sides}>
                            <div>
                                <Typography className={classes.title} gutterBottom>
                                    Work Experience
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Add your own working experience, including where you worked, your salary, and when you worked.
                                </Typography>
                            </div>
                            <ControlPointOutlinedIcon className={classes.circle} style={{ fontSize: 80 }} />
                        </Container>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Button size="small">
                                <Link className={classes.link} to="/contribute/work">
                                    Contribute Work Experience
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
                <Grid item xs={6}>
                <Card className={classes.card} border={0}>
                        <CardContent>

                        <Container className={classes.sides}>
                            <div>
                                <Typography className={classes.title} gutterBottom>
                                    Pending Entries
                                </Typography>
                                <Typography variant="body2" component="p">
                                    (admin only) View and moderate pending entries submitted by users.
                                </Typography>
                            </div>
                            <ControlPointOutlinedIcon className={classes.circle} style={{ fontSize: 80 }} />
                        </Container>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Button size="small">
                                <Link className={classes.link} to="/pending">
                                    View pending entries
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
}
