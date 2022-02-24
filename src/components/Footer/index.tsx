/* eslint-disable */
import React from "react";
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import Facebook from "../../Assets/Images/FacebookIcon.svg";
import LinkedIn from "../../Assets/Images/LinkedinIcon.svg";
import InstagramIcon from "../../Assets/Images/InstagramIcon.svg";
import Youtube from "../../Assets/Images/YoutubeIcon.svg";
import todoIcon from "../../Assets/Images/todoIcon.png";

import { Link } from "@mui/material";

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.Header}>
            <List className={classes.FooterHeader}>

                <ListItem className={classes.SubFooter}>
                    <Link
                        underline="none"
                        target="_blank"
                        href="#"

                    >
                        <img style={{ width: "100px" }} src={todoIcon} alt="footerIcon" />
                    </Link>{" "}
                    <List>
                        <List className={classes.SocialMedia}>
                            <ListItem className={classes.TwitterClass}>
                                <Link
                                    underline="none"
                                    className={classes.Text}
                                    target="_blank"
                                    href="#">
                                    <img src={LinkedIn} alt="linkedin" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    underline="none"
                                    target="_blank"
                                    href="#">
                                    <img src={Facebook} alt="facebook" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    underline="none"
                                    target="_blank"
                                    href="#">
                                    <img src={InstagramIcon} alt="Instagram" />
                                </Link>
                            </ListItem>
                            <ListItem className={classes.youtubeClass}>
                                <Link
                                    underline="none"
                                    target="_blank"
                                    href="#">
                                    <img src={Youtube} alt="youtube" />
                                </Link>
                            </ListItem>
                        </List>
                    </List>
                </ListItem>
                <ListItem className={classes.SubFooterSec} >
                    <Typography className={classes.listText} >
                        HELP

                    </Typography>
                    <List>
                        <ListItem>1800000557673</ListItem>
                        <ListItem>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="mailto:info@todo.com"
                            >
                                info@todo.com
                            </Link>
                        </ListItem>
                        <ListItem>
                            {" "}
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Go Down
                            </Link>
                        </ListItem>
                        <ListItem disableGutters={true}>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Others info
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem className={classes.SubFooterSec} >
                    <Typography className={classes.listText} >

                        CONTACT EMERGENCY
                    </Typography>
                    <List>
                        <ListItem>1800000557673</ListItem>
                        <ListItem>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="mailto:info@todo.com"
                            >
                                info@todo.com
                            </Link>
                        </ListItem>
                        <ListItem>
                            {" "}
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Go Down
                            </Link>
                        </ListItem>
                        <ListItem disableGutters={true}>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Others info
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem className={classes.SubFooterSec} >
                    <Typography className={classes.listText} >

                    SERVICE & SYSTEM
                    </Typography>
                    <List>
                        <ListItem> Todo Maintenance Record</ListItem>
                        <ListItem>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="mailto:info@todo.com"
                            >
                                24/7 Help line
                            </Link>
                        </ListItem>
                        <ListItem>
                            {" "}
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Go Down
                            </Link>
                        </ListItem>
                        <ListItem disableGutters={true}>
                            <Link
                                underline="none"
                                className={classes.Text}
                                target="_blank"
                                href="#"
                            >
                                Others info
                            </Link>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
            <Grid className={classes.Copyright}>
                <Grid>COPYRIGHT © 2022 Todo.COM | ALL RIGHTS RESERVED</Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;