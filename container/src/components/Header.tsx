import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

interface HeaderProps {
  signedIn?: boolean;
  onSignOut?: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)({
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const StyledLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

const Header: React.FC<HeaderProps> = ({ signedIn, onSignOut }) => {
  const handleClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <StyledAppBar position="static" color="default" elevation={0}>
      <StyledToolbar>
        <StyledLink color="primary" variant="outlined" href="/">
          <span>App</span>
        </StyledLink>

        <StyledLink color="primary" variant="outlined" href="/auth/signin">
          {signedIn ? "Logout" : "Login"}
        </StyledLink>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
