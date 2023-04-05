import { Avatar, Box, ButtonBase } from "@mui/material";

const Headerr = () => {
  return (
    <>
      <Box sx={{ width: 228, display: "flex" }}>
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          {/* Logo Section */}
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hiddne" }}>
          <Avatar variant="rounded" alt="JuiceOne" />
        </ButtonBase>
      </Box>
    </>
  );
};
