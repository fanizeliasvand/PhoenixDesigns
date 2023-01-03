import { Image } from "mui-image";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
// import Link from "@mui/material/Link";

function Header() {

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems="center"
      px={1.5}
      py={1}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        px={3}
      >
        <Image
          src="faniz.png"
          height="100px"
          width="200px"
          duration={3000}
          fit="fill"
          bgColor="inherit"
          showLoading={false}
          errorIcon={true}
          distance="100px"
          shiftDuration={900}
        />
      </Box>
      <Box
        display="flex"
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={12}
        px={3}
      >
        <TextField
          sx={{ flexGrow: 1 }}
          id="outlined-basic"
          label="search"
          variant="outlined"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        fontSize={12}
        px={3}
      ></Box>
    </Box>
  );
}

export default Header;
