import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '350px 10%',
        marginBottom: '20px',
        width:'auto',
    },
    rightDiv: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    leftDiv: {
        color: theme.palette.text.secondary,
        marginRight: "80px",
        left: "500px"
    }
});

class Conatnt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item sm={12} md={12} lg={6}>
                        <div className={classes.rightDiv}>
                            <h1>CONTACT</h1>
                            <Typography variant="subheading" gutterBottom>
                                Phone
                            </Typography>
                            <Typography variant="subheading" gutterBottom>
                                962-787061743
                             </Typography>
                            <h1>INTERSTS</h1>
                            <Typography variant="subheading" gutterBottom>
                                Video Games
                            </Typography>
                            <Typography variant="subheading" gutterBottom>
                                Swimming
                            </Typography>
                            <Typography variant="subheading" gutterBottom>
                                Technology
                            </Typography>

                            <h1>EDUCATION</h1>
                            <Typography variant="subheading" gutterBottom>
                                Philadelphia University
                             </Typography>
                            <Typography variant="subheading" gutterBottom>
                                Amman, Jordan
                                (Feb 2013 - Feb 2017)
                             </Typography>
                            Computer Scinece
                            <br></br>
                            <br></br>
                            <br></br>
                            <Typography variant="subheading" gutterBottom>
                                ReBootKamp(RBK)
                             </Typography>
                            <Typography variant="subheading" gutterBottom>
                                Amman, Jordan
                             (Feb 2018 - June 2018)
                             </Typography>

                            Full Stack Web Developer
                            <br></br>
                            <br></br>
                            <br></br>
                            <Typography variant="subheading" gutterBottom>
                                Gaming lab - maysalward
                             </Typography>
                            <Typography variant="subheading" gutterBottom>
                                (Sep 2015 - Nov 2016)
                             </Typography>
                            Games Development
                            (Unity 3D)
                            <br></br>
                            <br></br>
                            <br></br>

                            <Typography variant="subheading" gutterBottom>
                                Microsoft
                             </Typography>
                            <Typography variant="subheading" gutterBottom>
                                (Jul 2015 - Oct 2015)
                             </Typography>
                            Software Devepment
                            (Windows Phone, Azure Servers)
                        </div>
                    </Grid>
                    <Grid item sm={12} md={12} lg={6}>
                        <div className={classes.leftDiv}>
                            <h1> PROJECTS</h1>
                            <Typography variant="subheading" gutterBottom>
                                DonateAndHelp:
                        </Typography>
                            Role: Scrum master, Full Stack
                        <Typography variant="subheading" gutterBottom>
                                Greeno:
                        </Typography>
                            Role: Scrum master, Full Stack
                        <Typography variant="subheading" gutterBottom>
                                ProjectO:
                        </Typography>
                            Role: Scrum master, Full Stack
                        <h1>TECHNICAL SKILLS</h1>
                            <h1>SKILLS</h1>
                            <Typography variant="subheading" gutterBottom>
                                Team worker, autonomous learner,
                                applied problem solver, magnanimous,
                                good communicators, comfortable public
                                speaking/ presentation, collaborative,
                                project management skills.
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </div>
        )}
}

Conatnt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Conatnt);