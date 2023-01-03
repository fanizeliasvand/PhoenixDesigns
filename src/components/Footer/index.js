// prop-types is a library for typechecking of props
import { Icon } from "semantic-ui-react";

// @mui material components
import { Box, Typography, Link } from "@mui/material";
// import {Link } from "react-router-dom";
// Material Dashboard 2 React base styles
// import typography from "assets/theme/base/typography";

function Footer() {
  const links = [
    { href: "/Support", name: "Support" },
    { href: "/AboutUs", name: "About us" },
    { href: "/contact", name: "Contact us" },
  ];
  // <Link to="/Support">Support</Link>
  const socialMediasLink = [
    {
      href: "https://www.instagram.com/fanizeliasvand",
      name: "Instagram",
      icon: "instagram",
      color: "grey",
    },
    {
      href: "https://www.twitter.com/fanizxo",
      name: "Twitter",
      icon: "twitter",
      color: "blue",
    },
    {
      href: "https://www.snapchat.com/eliasvandfaniz",
      name: "SnapChat",
      icon: "snapchat ghost",
      color: "yellow",
    },
    {
      href: "https://www.youtube.com/fanizeliasvand6558",
      name: "YouTube",
      icon: "youtube",
      color: "red",
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      // sx={{ mb: 5, mt: 2 }}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
      py={1}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={12}
        px={3}
      >
        &copy; {new Date().getFullYear()}
        {socialMediasLink.map((link) => (
          <Box key={link.name} px={1} lineHeight={1}>
            <Link href={link.href} sx={{ textDecoration: "none" }}>
              <Icon name={link.icon} size="big" color={link.color} />
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 0,
          mb: 0,
          px: 3,
          py: 0,
        }}
      >
        {links.map((link) => (
          <Box key={link.name} component="li" px={2} lineHeight={1}>
            <Link href={link.href} target="_target">
              <Typography variant="button" fontWeight="bold" color="text">
                {link.name}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
