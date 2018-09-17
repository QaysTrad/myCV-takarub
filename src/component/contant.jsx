import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '350px 10%',
        marginBottom: '20px',
        width: 'auto',
    },
    rightDiv: {
        marginLeft: '0%',
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    leftDiv: {
        color: theme.palette.text.secondary,
        marginRight: "80px",
        marginLeft: '20px',
    },
    images: {
        width: 60,
        height: 60,
        margin: 10,
        minHeight: 60,
        maxHeight: 'auto',
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

                            <img className={classes.images} src="http://www.free-icons-download.net/images/new-message-icon-75691.png"></img>
                            <img className={classes.images} src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"></img>
                            <img className={classes.images} src="https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png"></img>
                            <Typography variant="subheading" gutterBottom>
                                <img className={classes.images} src="https://png.icons8.com/metro/1600/phone.png" align="middle"></img>
                                Phone
                                962-787061743
                            </Typography>

                            <br></br>
                            <br></br>

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

                            <br></br>
                            <br></br>

                            <h1>EDUCATION
                            <img className={classes.images} src="https://assureride.com/wp-content/uploads/2015/11/icon-education.png" align="middle"></img>

                            </h1>
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
                            <img className={classes.images} src="http://icons-for-free.com/free-icons/png/512/1322468.png"></img>
                            <img className={classes.images} src="https://png.icons8.com/ios/1600/react-native-filled.png"></img>
                            <img className={classes.images} src="https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1"></img>
                            <img className={classes.images} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
                            <br></br>
                            Role: Scrum master, Full Stack
                            <br></br>
                            <br></br>

                            <Typography variant="subheading" gutterBottom>
                                Greeno:
                        </Typography>
                            <img className={classes.images} src="http://icons-for-free.com/free-icons/png/512/1322468.png"></img>
                            <img className={classes.images} src="https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1"></img>
                            <img className={classes.images} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
                            <br></br>
                            Role: Scrum master, Full Stack
                            <br></br>
                            <br></br>
                            <br></br>

                            <Typography variant="subheading" gutterBottom>
                                ProjectO:
                        </Typography>
                            <img className={classes.images} src="https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"></img>
                            <img className={classes.images} src="https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1"></img>
                            <img className={classes.images} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>
                            <br></br>
                            Role: Scrum master, Full Stack
                            <br></br>
                            <br></br>
                            <br></br>

                            <h1>TECHNICAL SKILLS</h1>
                            <img className={classes.images} src="https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"></img>
                            <img className={classes.images} src="https://png.icons8.com/ios/1600/react-native-filled.png"></img>

                            <img className={classes.images} src="https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1"></img>
                            <img className={classes.images} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"></img>

                            <h1>SKILLS</h1>
                            <Typography variant="subheading" gutterBottom>
                                Team worker, autonomous learner,
                                applied problem solver, magnanimous,
                                good communicators, comfortable public
                                speaking/ presentation, collaborative,
                                project management skills.
                        </Typography>
                            <h1>VOLUNTEER</h1>
                            <Typography>
                                Ambassador - Assistant
                                (Sep 2016 - Nov 2016)
                        </Typography>
                            Gaming Lab
                        </div>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </div>
        )
    }
}

Conatnt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Conatnt);